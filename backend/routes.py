from flask import Blueprint, jsonify, request
from models import db, TeamMember

api = Blueprint('api', __name__)

@api.route('/team', methods=['GET'])
def get_team():
    members = TeamMember.query.all()
    return jsonify([m.to_dict() for m in members])

@api.route('/team', methods=['POST'])
def add_member():
    data = request.json
    new_member = TeamMember(
        name=data.get('name'),
        role=data.get('role'),
        available=data.get('available', True)
    )
    db.session.add(new_member)
    db.session.commit()
    return jsonify(new_member.to_dict()), 201

@api.route('/team/<int:member_id>', methods=['PUT'])
def update_member(member_id):
    member = TeamMember.query.get_or_404(member_id)
    data = request.json
    
    if 'name' in data:
        member.name = data['name']
    if 'role' in data:
        member.role = data['role']
    if 'available' in data:
        member.available = data['available']
        
    db.session.commit()
    return jsonify(member.to_dict())

@api.route('/team/<int:member_id>', methods=['DELETE'])
def delete_member(member_id):
    member = TeamMember.query.get_or_404(member_id)
    db.session.delete(member)
    db.session.commit()
    return '', 204

@api.route('/stats', methods=['GET'])
def get_stats():
    total = TeamMember.query.count()
    available = TeamMember.query.filter_by(available=True).count()
    busy = total - available
    return jsonify({
        'total': total,
        'available': available,
        'busy': busy
    })
