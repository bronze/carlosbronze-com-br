// https://stackoverflow.com/questions/21989996/want-to-run-console-log-once

var logged = false;

/*In your function*/
if (!logged) {
  console.log("pssst wanna talk? get in touch!");
  logged = true;
}