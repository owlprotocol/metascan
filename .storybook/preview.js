import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/index.css';

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
                value: '#FAFAFA',
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
