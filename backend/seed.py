from app import app
from models import db, TeamMember

def seed_data():
    with app.app_context():
        if TeamMember.query.count() == 0:
            members = [
                TeamMember(name="Alex Rivers", role="Senior Developer", available=True),
                TeamMember(name="Samantha Chen", role="Product Designer", available=False),
                TeamMember(name="Jordan Taylor", role="Backend Engineer", available=True),
                TeamMember(name="Maria Garcia", role="QA Specialist", available=True),
                TeamMember(name="Liam Wilson", role="Frontend Developer", available=False),
            ]
            db.session.bulk_save_objects(members)
            db.session.commit()
            print("Database seeded successfully!")
        else:
            print("Database already contains data.")

if __name__ == '__main__':
    seed_data()
