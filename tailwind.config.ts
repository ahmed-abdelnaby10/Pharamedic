import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
    },
    backgroundSize: {
      "30": "30px auto",
      "cover": "cover",
    },
    backgroundPosition: {
      "center-center": "center center",
      "left-center": "25% 50%",
    },
    backgroundImage: {
      "overlay": "radial-gradient(at center center, rgb(255 255 255 / 66%) 0%, rgb(255 255 255) 60%)",
      "overlay2": "radial-gradient(at bottom left, #FFFFFFA8 0%, white 60%);",
      "overlay3": "linear-gradient(125deg, #2f6c6d 0%, #75C2C3B3 80%)",
      "overlay4": "linear-gradient(180deg, #f6f6f6 0%, white 90%);",
    },
    extend: {
      padding: {
        '50%': '50%',
        '34%': '34%',
      },
      boxShadow: {
        '3xl': '1px 1px 7px 6px rgb(0 0 0 / 0.025), 0 2px 4px -2px rgb(0 0 0 / 0.1);'
      },
      keyframes: {
        'show-bg': {
          '0%': {left:'0', width:'0'},
          '100%': {left:'0', width:'100%'},
        },
      },
      animation: {
        'show-bg': 'show-bg 0.3s linear forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-for-lands': 'linear-gradient(135deg, #2F6C6DB8 0%, #132b2c 100%)',
        'gradient2-for-lands': 'linear-gradient(135deg, #47a2a3 0%, #2F6C6DB8 100%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pharma-shop' : "url('/pharmacy-shop.jpg')",
        'plus' : "url('/plus-1.png')",
        'land-1' : "url('/portrait-of-pharmacist.jpg')",
        'land-2' : "url('/pharmacist-shopping.jpg')",
        'land-3' : "url('/medicines-background.jpg')",
        'blur' : "url('/blur.jpg')",
        'about' : "url('/about-land.jpg')",
      },
      width: {
        "w100": "100px",
        "w200": "200px",
        "w300": "300px",
        "w400": "400px",
        "w430": "430px",
        "w500": "500px",
        "w550": "550px",
        "w600": "600px",
        "w700": "700px",
        "w110%": "110%",
      },
      height: {
        "h300": "300px",
        "h400": "400px",
        "h420": "420px",
        "h500": "500px",
        "h600": "600px",
        "h700": "700px",
        "h800": "800px",
      },
      minWidth: {
        "430":"430px"
      },
      gridTemplateColumns: {
        "grid4":"repeat(4, minmax(200px, 1fr))",
        "grid3":"repeat(3, minmax(250px, 1fr))",
        "grid2":"repeat(2, minmax(250px, 1fr))",
        "grid2sm":"repeat(2, minmax(135px, 1fr))",
        "grid1":"repeat(1, minmax(205px, 1fr))",
      },
      flexBasis: {
        "5/10": "calc(50% - 64px)"
      },
      objectPosition: {
        "center-center": "center center"
      }
    },
    screens: {
      'small': {'max': '640px'},
      'meduim': {'min': '641px', 'max': '768px'},
      'large': {'min': '769px', 'max': '992px'},
      'xlarge': {'min': '993px', 'max': '1200px'},
      'xxxlarge': {'min': '1201px'},
      'extralarge': {'min': '1300px'},
      'smallerThanLarge': {'max': '992px'},
      'moreThanLarge': {'min': '993px'},
      'small700': {'max': '701px'},
    },
    colors: {
      "hover-color": "#47a2a3" ,
      "bg-color": "#2f6c6d" ,
      "btn-color": "#c2c375",
      "txt-color": "#6a6a6a",
      "shadow": "rgba(51,51,51,.5)",
      "transparent": "transparent",
      "white": "white",
      "black": "black",
      "red": "red",
      "eee": "#eee",
      "ddd": "#dddddd",
      "f6": "#f6f6f6",
      "twitter": "#1da1f2",
      "linkedIn": "#0a66c2",
      "insta": "#c32aa3",
      "facebook": "#1877f2",
    },
  },
  plugins: [],
  darkMode: "class",
  variants: {
    extend: {
      display: ["group-hover"],
    }
  }
}
export default config
