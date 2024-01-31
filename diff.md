```shell
diff --git a/main.js b/main.js
index 8b78938..f8e4959 100644
--- a/main.js
+++ b/main.js
@@ -33,7 +33,7 @@ received is an even number.
 HINT: Use the modulo operator (%) Google it! 😊
 ******************************************************************************/
 
-export const oddOrEven = () => {
+export const oddOrEven = (number) => {
   //your code here
 
 if (number % 2 === 0) {
@@ -92,21 +92,21 @@ export const greeter = (name, hour) => {
   //your code here
 
 if (hour >= 0 && hour <= 5) {
-  return "Night Night" + "" + name + "mate";
+  return "Good night" + " " + name;
 }
 
 if (hour >= 6 && hour <= 11) {
-  return "Morning" + "" + name + "mate";
+  return "Good morning" + " " + name;
 }
 
 if (hour >= 12 && hour <= 17) {
-  return "Avro" + "" + name + "mate";
+  return "Good day" + " " + name;
 }
 
 if (hour >= 18 && hour <= 23) {
-  return "Evnen" + "" + name +"mate";
+  return "Good evening" + " " + name;
 }
-return "Invalid Time Mate"
+return "Invalid time"
 
 };
 
@@ -154,7 +154,7 @@ Example3: "   hard        " should return "fun"
 
 ******************************************************************************/
 
-export const cleanAndFun = (myStringtring) => {
+export const cleanAndFun = (myString) => {
   //your code here
   myString = myString.replace(`hard`, 'fun').trim();
   return myString;
@@ -220,7 +220,7 @@ Return "😎Primitive values only😎"
 
 ******************************************************************************/
 
-export function coolMaker(paramater) {
+export function coolMaker(parameter) {
   //your code here
 
   if (typeof parameter === "string") {
@@ -266,11 +266,8 @@ Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
 Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
 ******************************************************************************/
 
-export const addOrRemove = () => {
+export const addOrRemove = (arr, string) => {
   //your code here
-
-  const string = str;
-  const arr = array;
   if (arr.includes(string)) {
     arr.splice(arr.indexOf(string), 1);
     return arr;
```