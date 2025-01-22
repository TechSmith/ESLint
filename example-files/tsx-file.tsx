// missing return type
const a = (b: number) => b + 1;

// magic number
a(5);

// unused, missing return type
const Component = () => (
   <>
      <div>
         Hello world!
      </div>
      <span />
   </>
);