type UndefinedLiteralType = undefined;
type NullLiteralType = null;

//Symbol alike
const symbolism: 'symbolism' = 'symbolism'

// Enum to union type

type NoYesStrings = 'NO' | 'YES';

function toGerman2(value: NoYesStrings): string {
    switch (value) {
      case 'NO':
        return 'Nein';
      case 'YES':
        return 'Ja';
    }
  }
  