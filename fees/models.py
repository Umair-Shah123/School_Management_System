from django.db import models
from student.models import Student
# Create your models here.
class Fees(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE,related_name='fees')
    amount=models.DecimalField(max_digits=10,decimal_places=2)
    due_date=models.DateField()
    status=models.CharField(max_length=20)
    payment_date=models.DateField(null=True,blank=True)

    def __str__(self):
        return f"{self.student.name} - {self.amount} - {self.due_date} -{self.status}"

    