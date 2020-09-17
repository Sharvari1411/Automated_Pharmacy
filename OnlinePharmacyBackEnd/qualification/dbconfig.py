import pymysql

class DbConfig:

	def __init__(self):
		self.hostname="localhost"
		self.username="root"
		self.password="manager"
		self.schemaname = "onlinepharmacy"

	def connectMySQL(self):
		self.conn = pymysql.connect( host=self.hostname, user=self.username, passwd=self.password, db=self.schemaname)

		