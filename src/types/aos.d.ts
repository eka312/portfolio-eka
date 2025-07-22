declare module 'aos' {
    interface AOSOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
      [key: string]: unknown;

    }
  
    interface AOSInstance {
      init(options?: AOSOptions): void;
      refresh(): void;
      refreshHard(): void;
    }
  
    const AOS: AOSInstance;
    export default AOS;
}
  