//in view function
export function inView({
  elements,
  elementVisibleThreshold = 0,
  aboveViewFn,
  inViewFn,
  belowViewFn,
  onlyOne,
}: {
  elements: NodeListOf<Element>;
  elementVisibleThreshold?: number;
  aboveViewFn?: (e: Element, i: number) => void;
  inViewFn?: (e: Element, i: number) => void;
  belowViewFn?: (e: Element, i: number) => void;
  onlyOne?: boolean;
}) {
  var windowHeight: number = window.innerHeight;

  for (var i = 0; i < elements.length; i++) {
    var elementRect = elements[i].getBoundingClientRect();

    // element above window upper limit
    if (elementRect.bottom < -elementVisibleThreshold) {
      if (aboveViewFn) aboveViewFn(elements[i], i);
    }
    // element is above window lower limit (in view)
    else if (elementRect.top < windowHeight - elementVisibleThreshold) {
      if (inViewFn) inViewFn(elements[i], i);
    }
    // element is below window lower limit
    else {
      if (belowViewFn) belowViewFn(elements[i], i);
    }
  }
}
