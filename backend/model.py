import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
import pickle
import os

filePath = 'heart.csv'
if not os.path.exists(filePath):
    raise FileNotFoundError(f"The file {filePath} does not exist.")

data = pd.read_csv(filePath)
X = data.iloc[:, :-1].values
y = data.iloc[:, -1].values

x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1)
sc = StandardScaler()
x_train = sc.fit_transform(x_train)
x_test = sc.transform(x_test)

models = {
    "Logistic Regression": LogisticRegression(random_state=1),
    "K-Neighbors Classifier": KNeighborsClassifier(),
    "SVC": SVC(random_state=1),
    "Gaussian NB": GaussianNB(),
    "Decision Tree": DecisionTreeClassifier(random_state=1),
    "Random Forest": RandomForestClassifier(random_state=1),
    "XGBoost": XGBClassifier(random_state=1)
}

best_model = None
best_accuracy = 0

for name, model in models.items():
    model.fit(x_train, y_train)
    y_pred = model.predict(x_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Model: {name}")
    print(classification_report(y_test, y_pred))
    print("Accuracy:", accuracy)
    print()
    
    if accuracy > best_accuracy:
        best_accuracy = accuracy
        best_model = model

# Save the best model and scaler
with open('best_model.pkl', 'wb') as f:
    pickle.dump(best_model, f)
with open('scaler.pkl', 'wb') as f:
    pickle.dump(sc, f)
