# Generated by Django 3.2.9 on 2021-11-24 02:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('work', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='special',
            new_name='special_id',
        ),
    ]
