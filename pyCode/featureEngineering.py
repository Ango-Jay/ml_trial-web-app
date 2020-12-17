import pandas as pd

def featureEngin(dataSet):
    dataSet = pd.read_csv( dataSet, header=0, engine='python')
    dataSet.drop(['PassengerId','Ticket', 'Cabin', 'Name'], 1, inplace = True )
    dataSet['Age'] = dataSet['Age'].interpolate()
    dataSet['Embarked'] = dataSet['Embarked'].fillna('S')
    dummies = []
    cols = ['Sex','Embarked']
    for col in cols:
        dummies.append(pd.get_dummies(dataSet[col]))
    titanic_dummies = pd.concat(dummies, axis=1)
    dataSet = pd.concat((dataSet,titanic_dummies),axis=1)
    dataSet = dataSet.drop(['Sex', 'Embarked'],axis=1)
    dataSet = dataSet.astype({ "male": float, "female": float, "C": float, "Q": float, "S": float})
    return dataSet