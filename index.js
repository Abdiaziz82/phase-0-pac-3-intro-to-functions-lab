function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  
  console.log(whisper("Hello")); 

  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  logShout("hello"); // Output: "HELLO"

  function logWhisper(string) {
    console.log((string.toLowerCase)());
  }
  logWhisper("hello")

  function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else {
      return "YES INDEED!";
    }
  }
