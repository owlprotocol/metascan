import { BrowserRouter as Router } from 'react-router-dom';

//Import shared CSS
//import 'bootstrap/dist/css/bootstrap.min.css';

export const parameters = {
    actions: {
        argTypesRegex: "^on[A-Z].*"
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'main',
        values: [
            {
                name: 'main',
                value: '#252525',
            },
        ]
    }
}

export const decorators = [
    (Story) => (
        <Router>
            <Story />
        </Router>
    ),
];
