import { isMatching, match, P } from "ts-pattern";

type State =
  | { status: 'idle' }
  | { status: 'loading'; startTime: number }
  | { status: 'success'; data: string }
  | { status: 'error'; error: Error };

type Event =
  | { type: 'fetch' }
  | { type: 'success'; data: string }
  | { type: 'error'; error: Error }
  | { type: 'cancel' };

  const reducer = (state: State, event: Event): State =>
  //match<Input,Output>
  match<[State, Event], State>([state, event])
    .with(
      [{ status: 'loading' }, { type: 'success' }],
      ([, event]) => ({
        status: 'success',
        data: event.data,
      })
    )
    .with(
        //P.select() allows to pass the field to the handler
      [{ status: 'loading' }, { type: 'error', error: P.select('err') }],
      ({err}) => ({
        status: 'error',
        error: err,
      })
    )
    .with(
        //P.not() is like an if not or an unless
      [{ status: P.not('loading') }, { type: 'fetch' }],
      () => ({
        status: 'loading',
        startTime: Date.now(),
      })
    )
    .with(
      [
        {
          status: 'loading',
          //P.when(allows to put conditions on patterns)
          startTime: P.when((t) => t + 2000 < Date.now()),
        },
        { type: 'cancel' },
      ],
      () => ({
        status: 'idle',
      })
    )
    //P._ acts as wildcard
    .with(P._, () => state)
    .exhaustive();