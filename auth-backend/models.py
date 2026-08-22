from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship, declarative_base
from datetime import datetime

Base = declarative_base()

class Role(Base):
    __tablename__ = 'roles'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True, nullable=False)

class User(Base):
    __tablename__ = 'users'
    id = Column(String(64), primary_key=True)
    email = Column(String(256), unique=True, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    role_id = Column(Integer, ForeignKey('roles.id'))
    role = relationship('Role')

class Course(Base):
    __tablename__ = 'courses'
    id = Column(String(64), primary_key=True)
    title = Column(String(256), nullable=False)
    category_id = Column(String(128), index=True)
    description = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)

class Order(Base):
    __tablename__ = 'orders'
    id = Column(String(64), primary_key=True)
    user_id = Column(String(64), ForeignKey('users.id'))
    course_id = Column(String(64), ForeignKey('courses.id'))
    amount = Column(Integer)
    currency = Column(String(8), default='INR')
    status = Column(String(32), default='created')
    created_at = Column(DateTime, default=datetime.utcnow)
