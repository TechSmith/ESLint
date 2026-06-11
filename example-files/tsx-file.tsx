import {a} from './ts-file';

// missing return type
const c = (b: number) => b + 1;

// magic number
c(5);

a(0);

// missing return type, unused export
export const Component = () => (
   <>
      <div>
         Hello world!
      </div>
      <span />
   </>
);