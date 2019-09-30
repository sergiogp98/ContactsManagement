from user import User
import mongoengine as db

db.connect('LibraryManagement', host='127.0.0.1', port=27017)

user = User(name='Ruben', surname='Garcia', email='d@a.com')
user.save()
#print(user.print_users())   

