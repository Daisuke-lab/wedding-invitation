import { gsap } from 'gsap';

export default function addAnimation(button:HTMLButtonElement) {
      if (button.classList.contains('active')) {
        return 
    }
    button.classList.add('active');
    gsap.to(button, {
        keyframes: [
          {
            '--left-wing-first-x': 50,
            '--left-wing-first-y': 100,
            '--right-wing-second-x': 50,
            '--right-wing-second-y': 100,
            duration: 0.2,
            onComplete() {
              gsap.set(button, {
                '--left-wing-first-y': 0,
                '--left-wing-second-x': 40,
                '--left-wing-second-y': 100,
                '--left-wing-third-x': 0,
                '--left-wing-third-y': 100,
                '--left-body-third-x': 40,
                '--right-wing-first-x': 50,
                '--right-wing-first-y': 0,
                '--right-wing-second-x': 60,
                '--right-wing-second-y': 100,
                '--right-wing-third-x': 100,
                '--right-wing-third-y': 100,
                '--right-body-third-x': 60,
              });
            },
          },
          {
            '--left-wing-third-x': 20,
            '--left-wing-third-y': 90,
            '--left-wing-second-y': 90,
            '--left-body-third-y': 90,
            '--right-wing-third-x': 80,
            '--right-wing-third-y': 90,
            '--right-body-third-y': 90,
            '--right-wing-second-y': 90,
            duration: 0.2,
          },
          {
            '--rotate': 50,
            '--left-wing-third-y': 95,
            '--left-wing-third-x': 27,
            '--right-body-third-x': 45,
            '--right-wing-second-x': 45,
            '--right-wing-third-x': 60,
            '--right-wing-third-y': 83,
            duration: 0.25,
          },
          {
            '--rotate': 60,
            '--plane-x': -8,
            '--plane-y': 40,
            duration: 0.2,
          },
          {
            '--rotate': 40,
            '--plane-x': 45,
            '--plane-y': -1000,
            '--plane-opacity': 0,
            duration: 0.7,
          },
        ],
      });

      gsap.to(button, {
        keyframes: [
          {
            '--text-opacity': 0,
            '--border-radius': 0,
            '--left-wing-background': getVar(button,'--primary-dark'),
            '--right-wing-background': getVar(button, '--primary-dark'),
            duration: 0.11,
          },
          {
            '--left-wing-background': getVar(button, '--primary'),
            '--right-wing-background': getVar(button, '--primary'),
            duration: 0.14,
          },
          {
            '--left-body-background': getVar(button, '--primary-dark'),
            '--right-body-background': getVar(button, '--primary-darkest'),
            duration: 0.25,
            delay: 0.1,
          },
          {
            '--trails-stroke': 171,
            duration: 0.22,
            delay: 0.22,
          },
          {
            '--success-opacity': 1,
            '--success-x': 0,
            duration: 0.2,
            delay: 0.15,
          },
          {
            '--success-stroke': 0,
            duration: 0.15,
          },
        ],
      });
  
}
const getVar = (button:HTMLButtonElement,variable: string) => getComputedStyle(button).getPropertyValue(variable);