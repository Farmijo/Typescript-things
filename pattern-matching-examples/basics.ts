import { isMatching, match, P } from "ts-pattern";

const userPattern = {
    name: P.string,
    postCount: P.number,
    posts: P.array({ title: P.string }),
    age: P.optional(P.number)
  };


type User = {
    name: string,
    postCount: number,
    posts: { title: string }[],
    age?: number
  };
//Type could also be infered from pattern

// type User = P.infer<typeof userPattern>;

//TypeGuard
const isUserList = isMatching(P.array(userPattern));

type PossibleTypes =
  | string
  | number
  | { someKey: string }
  | string[]
  | User[]

const basicMatch = (value: PossibleTypes, index: number) =>
  match(value)
  .with(20, ()=> console.log("Value introduced is a twenty"))
  .with(P.string, (value)=>{console.log("Value introduced is a string")})
  .with(P.array(P.string), (value)=>{console.log("Value introduced is an String Array")})
  .with(P.number, (value)=>{console.log("Value introduced is a number")})
  //.exhaustive() // Disabled bc not all possibilites are checked
  .with(P.any, isUserList, (value=>console.log("Type is matched")))
  .otherwise(()=> console.log("Value is not checked"))

  const inputs: PossibleTypes[] = [
    "Welcome!",
    ["hello"],
    ["hello", "world"],
    10,
    { someKey: "some value" },
    { someKey: "value" },
    ["bonjour", "hola"],
    20,
    [
        { name: "Alice", postCount: 20, posts: [] },
        { name: "Bob", postCount: 49, posts: [] },
        { name: "Peter", postCount: 9, posts: [] }
      ]
  ];

  inputs.map(basicMatch)

