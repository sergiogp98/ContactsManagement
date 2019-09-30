import mongoengine as db

class User(db.Document):
    meta = {'collection': 'Users'}

    name = db.StringField(required=True, max_length=20)
    surname = db.StringField(required=True, max_length=50)
    email = db.StringField(required=True, max_length=50, unique=True)

    def set_user_name(self, new_name):
        self.name = new_name
    
    def set_user_surname(self, new_surname):
        self.surname = new_surname
    
    def set_user_email(self, new_email):
        self.email = new_email

    def print_users(self):
        users = User.objects()
        return users.to_json()

        
