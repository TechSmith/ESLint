// missing return type
const a = (b: number) => b + 1;

// magic number
a(5);

// unused, missing return type, unused export
export const Component = () => (
   <>
      <div>
         Hello world!
      </div>
      <span />
   </>
);