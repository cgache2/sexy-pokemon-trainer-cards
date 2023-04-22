import ghpages from 'gh-pages';

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/cgache2/cgache2.github.io.git', // Update to point to your repository  
        user: {
            name: 'cgache2', // update to use your name
            email: 'mystfication@yahoo.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)