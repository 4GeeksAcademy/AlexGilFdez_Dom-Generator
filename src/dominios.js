let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let domains = ['.com', '.net', '.us', '.io'];

for (let pronoun of pronouns) {
    for (let adj of adjs) {
        for (let noun of nouns) {
            for (let domain of domains) {
                console.log(pronoun + adj + noun + domain);
                
            }
        }
    }
}