import assert from "assert";

enum NoYesNumeric {
    No = 0,
    Yes = 1
  }

enum NoYesString {
No = 'No',
Yes = 'Yes',
}

enum EnumMixed {
One = 'One',
Two = 'Two',
Three = 3,
Four = 4,
}
enum EnumWithoutValue {
    No,
    Yes
}
// Logueando este tipo de enums solo se ven los numeros ()

assert.equal(EnumWithoutValue.No, 0);
assert.equal(EnumWithoutValue.Yes, 1);

// You can also quote the names of the enums

enum HttpRequestField {
    'Accept',
    'Accept-Charset',
    'Accept-Datetime',
    'Accept-Encoding',
    'Accept-Language',
  }
  assert.equal(HttpRequestField['Accept-Charset'], 1);

// Ojo con usar estaticos en enums
enum NoYes { No, Yes }
function func(noYes: NoYes) {}
func(33); // no error!

// Mejor usar los enums de string


//CONST ENUMS
const enum NoYesConstant {
    No,
    Yes,
  }
  function toGerman(value: NoYesConstant) {
    switch (value) {
      case NoYesConstant.No:
        return 'Nein';
      case NoYesConstant.Yes:
        return 'Ja';
    }
  }
  
// Esto transpila a 
function toGermanTrasnpiled(value) {
    switch (value) {
      case "No" /* No */:
        return 'Nein';
      case "Yes" /* Yes */:
        return 'Ja';
    }
  }

  //TRUCO: 

  enum HttpRequestKeyEnum {
    'Accept',
    'Accept-Charset',
    'Accept-Datetime',
    'Accept-Encoding',
    'Accept-Language',
  }

  export type HttpRequestKey = keyof typeof HttpRequestKeyEnum;
  export type HttpRequestKey2 = keyof typeof HttpRequestKeyEnum;
  export type HttpRequestKey3 = keyof typeof HttpRequestKeyEnum;
  export type HttpRequestKey4 = keyof typeof HttpRequestKeyEnum;

