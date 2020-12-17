import os

file = os.path.join(os.getcwd(), "pyCode", "pyForm.csv")
from featureEngineering import featureEngin
df1 = featureEngin(file)
from modelTrain import modelFit
df2 = modelFit(df1)
print(df2)
