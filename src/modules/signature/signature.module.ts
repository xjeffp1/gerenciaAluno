type Signature = (param1: string, param2: number) => void;

class SignatureClass {
  private signatureFunction: Signature;

  constructor(signatureFunction: Signature) {
    this.signatureFunction = signatureFunction;
  }

  execute(param1: string, param2: number) {
    this.signatureFunction(param1, param2);
  }
}

const signatureFunction: Signature = (param1, param2) => {
  console.log(`Received params: ${param1} and ${param2}`);
};

const signatureInstance = new SignatureClass(signatureFunction);
signatureInstance.execute("Hello", 42);
