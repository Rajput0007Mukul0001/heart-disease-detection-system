from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from fastapi.responses import JSONResponse



import random

from flask import Flask ,request,jsonify

# import numpy as np
import pandas as pd
# import matplotlib as plt
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
from sklearn.metrics import confusion_matrix, accuracy_score


# ***********************************************************************************************************************
filePath = 'heart.csv'

data = pd.read_csv(filePath)

# data.head(5)
print(data)

print("(Rows, columns): " + str(data.shape)+"\n")
var = data.columns

# returns the number of unique values for each variable.`
# data.nunique(axis=0)
for column in data.columns:
    unique_values = data[column].unique()
    size = len(unique_values)
    print(f"No. of unique_values for {column}:{size}\n")
    # print(f"Unique values for {column}:\n{unique_values}\n")

summary = data.describe()
print(summary)

# display missing values
print(data.isna().sum())
print("\n")

proportion = data['target'].value_counts()
print(proportion)

# calculate correlation matrix

corr = data.corr()
plt.subplots(figsize=(15, 10))
sns.heatmap(corr, xticklabels=corr.columns, yticklabels=corr.columns, annot=True, cmap=sns.diverging_palette(220, 20, as_cmap=True))
sns.heatmap(corr, xticklabels=corr.columns,
            yticklabels=corr.columns,
            annot=True,
            cmap=sns.diverging_palette(220, 20, as_cmap=True))

# plt.show()


subData = data[['age', 'trestbps', 'chol', 'thalach', 'oldpeak']]
sns.pairplot(subData)
# plt.show()

sns.catplot(x="target", y="oldpeak", hue="slope", kind="bar", data=data)

plt.title('ST depression (induced by exercise relative to rest) vs. Heart Disease', size=25)
plt.xlabel('Heart Disease', size=20)
plt.ylabel('ST depression', size=20)
# plt.show()

plt.figure(figsize=(12, 8))
sns.violinplot(x='target', y='oldpeak', hue="sex", inner='quartile', data=data)
plt.title("Thalach Level vs. Heart Disease", fontsize=20)
plt.xlabel("Heart Disease Target", fontsize=16)
plt.ylabel("Thalach Level", fontsize=16)
# plt.show()

plt.figure(figsize=(12, 8))
sns.boxplot(x='target', y='thalach', hue="sex", data=data)
plt.title("ST depression Level vs. Heart Disease", fontsize=20)
plt.xlabel("Heart Disease Target", fontsize=16)
plt.ylabel("ST depression induced by exercise relative to rest", fontsize=16)
# plt.show()

# Filtering data by POSITIVE Heart Disease patient
pos_data = data[data['target'] == 1]
described_pos_data = pos_data.describe()
print(described_pos_data)

# Filtering data by NEGATIVE Heart Disease patient
neg_data = data[data['target'] == 0]
described_neg_data = neg_data.describe()
print(described_neg_data)

print("\n")
print("(Positive Patients ST depression): " + str(pos_data['oldpeak'].mean()))
print("(Negative Patients ST depression): " + str(neg_data['oldpeak'].mean()))

print("\n")
print("(Positive Patients thalach): " + str(pos_data['thalach'].mean()))
print("(Negative Patients thalach): " + str(neg_data['thalach'].mean()))
print("\n")

# Machine Learning and Predictive Analytics
# prepare data for modeling

X = data.iloc[:, :-1].values
y = data.iloc[:, -1].values

x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1)

sc = StandardScaler()
x_train = sc.fit_transform(x_train)
x_test = sc.transform(x_test)

# get instance of model
model1 = LogisticRegression(random_state=1)
# Train/Fit model
model1.fit(x_train, y_train)

# get y predictions
y_pred1 = model1.predict(x_test)
# output accuracy
print(classification_report(y_test, y_pred1))

# get instance of model
model2 = KNeighborsClassifier()
# Train/Fit model
model2.fit(x_train, y_train)

# get y predictions
y_pred2 = model2.predict(x_test)
# output accuracy
print(classification_report(y_test, y_pred2))

# get instance of model
model3 = SVC(random_state=1)
# Train/Fit model
model3.fit(x_train, y_train)

# get y predictions
y_pred3 = model3.predict(x_test)
# output accuracy
print(classification_report(y_test, y_pred3))

# get instance of model
model4 = GaussianNB()
# Train/Fit model
model4.fit(x_train, y_train)

# get y predictions
y_pred4 = model4.predict(x_test)
# output accuracy
print(classification_report(y_test, y_pred4))

# get instance of model
model5 = DecisionTreeClassifier(random_state=1)
# Train/Fit model
model5.fit(x_train, y_train)

# get y predictions
y_pred5 = model5.predict(x_test)
# output accuracy
print(classification_report(y_test, y_pred5))

# get instance of model
model6 = RandomForestClassifier(random_state=1)
# Train/Fit model
model6.fit(x_train, y_train)

# get y predictions
y_pred6 = model6.predict(x_test)
# output accuracy
print(classification_report(y_test, y_pred6))

model7 = XGBClassifier(random_state=1)
model7.fit(x_train, y_train)
y_pred7 = model7.predict(x_test)
print(classification_report(y_test, y_pred7))

cm = confusion_matrix(y_test, y_pred6)
print(cm)
accuracy_score(y_test, y_pred6)

# get importance
importance = model6.feature_importances_

# summarize feature importance
for i, v in enumerate(importance):
    print('Feature: %0d, Score: %.5f' % (i, v))

index = data.columns[:-1]
importance = pd.Series(model6.feature_importances_, index=index)
importance.nlargest(13).plot(kind='barh', colormap='winter')

# print(model5.predict(sc.transform([[20, 1, 2, 110, 230, 1, 1, 140, 1, 2.2, 2, 0, 2]])))

# y_pred = model6.predict(x_test)
# print(np.concatenate((y_pred.reshape(len(y_pred), 1), y_test.reshape(len(y_test), 1)), 1))

# ***********************************************************************************************************************



app = FastAPI()

class InputData(BaseModel):
    data: List[float]

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

storevar = {}

@app.get('/')
async def root(variable):
    return JSONResponse(content=storevar)

@app.post("/")
async def process_post_request(input_data: InputData):
    
    answer=0
    
    try:
        # Access the list of values
        received_data = input_data.data
       # print(received_data)
 
        # Update storevar or perform any other logic
        # storevar.update({'data': received_data})
        list1=[]

        for i in received_data:
            list1.append(int(i))
        
        for it in list1:
            print(it,end=" @ ")

        answer=model6.predict(sc.transform([list1]))
        # answer=model5.predict(sc.transform([l1]))
        print(answer[0],end=" &&")

    except Exception as e:
        return JSONResponse(content={'errorhai': str(e)}, status_code=400)

    return JSONResponse(content={'Patient_Data': received_data,'Detection':int(answer[0])})

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)