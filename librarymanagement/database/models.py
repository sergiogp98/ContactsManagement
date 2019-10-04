import mongoengine as db

class User(db.Document):
    meta = {'collection': 'Users'}

    name = db.StringField(required=True, max_length=20)
    surname = db.StringField(required=True, max_length=50)
    email = db.StringField(required=True, max_length=50, unique=True)

    def print_users(self):
        users = User.objects()
        return users.to_json()

        
