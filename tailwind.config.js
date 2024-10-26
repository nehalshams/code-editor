/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		backgroundImage: {
			'grid-line': 'linear-gradient(0deg, #7d7d7d, rgba(0,0,0,0) 5%), linear-gradient(90deg, #7d7d7d, rgba(0,0,0,0) 5%)',
			'grid-blur-overlay': 'linear-gradient(to right, rgba(255, 255, 255, 0.3), transparent 10%, transparent 90%, rgba(255, 255, 255, 0.7))',
			'blur-shadow': 'linear-gradient(#ffffff00, #ffffff)'
		},
		textColor: {
			'primary-dark': '#333333',  // Dark Gray
			'primary-blue': '#1a237e',  // Deep Blue
			'primary-slate': '#2c3e50', // Dark Slate
	
			'accent-orange': '#d84315', // Deep Orange
			'accent-red': '#b71c1c',    // Dark Red
			'accent-teal': '#004d40',   // Dark Teal
			'accent-purple': '#6a1b9a', // Rich Purple
	
			'light-white': '#ffffff',   // Pure White
			'light-gray': '#d1d9e6',    // Cool Light Gray
			'light-pink': '#fce4ec',    // Pastel Light Pink
			'light-blue': '#e3f2fd',    // Pastel Light Blue
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		backgroundColor: {
			'light-gray1': "#f6f6f6"
		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
			'border-dark': "rgb(159, 159, 159)"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

