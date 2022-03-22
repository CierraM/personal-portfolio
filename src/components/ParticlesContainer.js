import Particles from "react-tsparticles";

const ParticlesContainer = props => {
    const options = {
        particles: {
            number: {
              value: 48,
              density: { enable: true, value_area: 4890.406785639845 }
            },
            color: { value: "#E2DCDE" },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.38481889460772545,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 252.53739958631982,
              random: true,
              anim: { enable: true, speed: 10, size_min: 40, sync: false }
            },
            move: {
              enable: true,
              speed: 2,
              direction: "top",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false, mode: "repulse" },
              onclick: { enable: false, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
    }

    return (
        <Particles id="particles" options={options} />
    )
}

export default ParticlesContainer