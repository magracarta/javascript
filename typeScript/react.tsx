import  { useState, useCallback, useRef, type FunctionComponent, type ReactElement, type FC, type ReactNode, useEffect, Component } from 'react';

// (prop) => JSX

type A = ({
  aa:string;
  bb(x: number): string;
})['bb'];

// type AA = A['aa'];
// type BB = A['bb'];

interface P {
  name : string,
  title : string,
  childeren? : ReactNode | undefined,
}
const WordRelay : FC<P> = (props) => {
    const [word, setWord] = useState<string>('제로초');
    // const [word, setWord] = useState(()=>{
    //   // 레이지 인잇 -> 복잡한 함수일때 사용.
    //   return 복잡한함수();
    // });
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    const deps : readonly any[] = []; 

    useEffect(()=>{
      console.log('useEffect');
    },deps);

    useEffect(()=>{
      console.log();
      const func = async()=>{
        // await axios.post();
      }

      func();
    },[]);

    const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
        e.preventDefault();
        const input = inputEl.current;
        if (word[word.length - 1] === value[0]) {
          setResult('딩동댕');
          setWord(value);
          setValue('');
          if (input) {
            input.focus();
          }
        } else {
          setResult('땡');
          setValue('');
          if (input) {
            input.focus();
          }
        }
    }, [word, value]);

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value) 
    }, []);

    return (
        <>
          <div>{word}</div>
          <form onSubmit={onSubmitForm}>
            <input
              ref={inputEl}
              value={value}
              onChange={onChange}
            />
            <button>입력!</button>
          </form>
          <div>{result}</div>
        </>
      );
};

export default WordRelay;