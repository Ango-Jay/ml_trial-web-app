import numpy as np
from sklearn import preprocessing, neighbors
from sklearn.model_selection import train_test_split
from sklearn import tree
from sklearn import svm
def modelFit(dataSet):
    x = np.array(dataSet.drop(['Survived'], 1))
    y = np.array(dataSet['Survived'])

    X_train, X_test, Y_train, Y_test = train_test_split(x, y, test_size = 0.2)
    cln = svm.SVC( gamma=0.001, C=100)
    cln = cln.fit(X_train, Y_train)
    acc = cln.score(X_test, Y_test)
    acc = acc * 100
    acc = round(acc, 2)
    return acc
    