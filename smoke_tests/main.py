# pip install selenium
# get the gecko driver for your platform from https://github.com/mozilla/geckodriver/releases
import unittest
from login_test import LoginTest
from specimen_test import SpecimenTest

suite = unittest.TestSuite()
suite.addTest(LoginTest())
suite.addTest(SpecimenTest())

runner = unittest.TextTestRunner()
runner.run(suite)