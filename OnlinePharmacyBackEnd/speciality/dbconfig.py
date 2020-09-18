import pymysql

class DbConfig:

	def __init__(self):
		self.hostname="localhost"
		self.username="root"
		self.password="Sh@ru1998"
		self.schemaname = "Automated_Pharmacy"

	def connectMySQL(self):
		self.conn = pymysql.connect( host=self.hostname, user=self.username, passwd=self.password, db=self.schemaname)

		