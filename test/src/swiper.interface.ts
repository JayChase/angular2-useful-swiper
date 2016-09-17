export interface Slider {
    params: Object;
    container: any;
    wrapper: any;
    slides: any;
    nextButton: any;
    prevButton: any;
    bullets: any;
    width: number;
    height: number;
    translate: any;
    progress: number;
    activeIndex: number;
    previousIndex: number;
    isBeginning: boolean;
    isEnd: boolean;
    autoplaying: boolean;
    animating: boolean;
    touches: Object; //todo proper touch event Object
    clickedIndex: number;
    clickedSlide: HTMLElement;
    slideNext: (runCallbacks: boolean, speed: number) => void;
    slidePrev: (runCallbacks: boolean, speed: number) => void;
    slideTo: (index: number, speed: number, runCallbacks: boolean) => void;
    update: (updateTranslate: boolean) => void;
    onResize: () => void;
    detachEvents: () => void;
    attachEvents: () => void;
    startAutoplay: () => void;
    stopAutoplay: () => void;
    destroy: (deleteInstance: boolean, cleanupStyles: boolean) => void;
    appendSlide: (slides: HTMLElement | string) => void;
    prependSlide: (slides: HTMLElement | string) => void;
    removeSlide: (slideIndex: number) => void;
    removeAllSlides: () => void;
    setWrapperTranslate: (translate: number) => void;
    getWrapperTranslate:() => void;
    on: (callback: any, handler: any) => void;
}