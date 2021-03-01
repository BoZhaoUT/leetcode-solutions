/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = (beginWord, endWord, wordList) => {
    // special case: end word cannot be reached
    if (!wordList.includes(endWord)) {
        return []
    }
    // special case
    if (endWord.length === 1) {
        return [[beginWord, endWord]]
    }
    // key: word, value: a set of neighbour words
    const wordToNeighboursMap = {}
    // the shortest distance between beginWord and otherWord. key: word, value: int distance
    const distanceFromBeginWord = {}
    let currentWords = [beginWord]
    let currentNeighbours = [] // the neighbours of current words
    let distance = 0 // distance between current words to begin word
    while (!wordToNeighboursMap[endWord] && currentWords.length) {
        currentWords.forEach(currWord => {
            // do nothing if this word is already in the maps
            if (wordToNeighboursMap[currWord]) {
                return
            }
            const neighbours = wordList.filter(otherWord => isNeighbour(currWord, otherWord))
            currentNeighbours = currentNeighbours.concat(neighbours)
            wordToNeighboursMap[currWord] = new Set(neighbours)
            distanceFromBeginWord[currWord] = distance
        })
        currentWords = currentNeighbours
        distance++
        currentNeighbours = []
    }
    // end word is not reachable
    if (!wordToNeighboursMap[endWord]) {
        return []
    }
    console.log(wordToNeighboursMap)
    console.log(distanceFromBeginWord)
    console.log(distance)

    const result = []
    let path = [beginWord]

    const findPaths = (path) => {
        const lastWordInPath = path[path.length - 1]
        // base case: a shortest path between begin word to end word is found
        if (path.length + 1 === distance && wordToNeighboursMap[lastWordInPath].has(endWord)) {
            result.push([...path, endWord])
        }
        // console.log({lastWordInPath})
        const neighbours = wordToNeighboursMap[lastWordInPath]
        neighbours.forEach(neighbour => {
            // only consider the neighbours that have correct distance
            // neighbours with shorter distance have been visited. i.e. it's in the path
            // neighbours with longer distance cannot be used in the path
            if (distanceFromBeginWord[neighbour] === path.length) {
                findPaths([...path, neighbour])
            }
        })
    }
    findPaths(path)
    return result
}

// two words are neighbours iff they only diff by 1 char
const isNeighbour = (word1, word2) => {
    let diff = 0
    let i = 0
    while (diff <= 1 && i < word1.length) {
        diff += word1[i] !== word2[i] ? 1 : 0
        i++
    }
    return diff === 1
}

// the run time can be improved by storing distance from end word instead of begin word
// while finding paths from begin to end word
// we start from begin word and all begin word's neighbours have distanceFromBeginWord = 1
// only a subset of the neighbours of distanceFromEndWord = x, x is the shortest distance

// console.log(findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))
// console.log(findLadders('a', 'c', ["a","b","c"]))
// console.log(findLadders('hot', 'dog', ["hot","dog"]))
// console.log(findLadders('hot', 'dog', ["hot","cog","dog","tot","hog","hop","pot","dot"]))
// console.log(findLadders("qa", "sq", ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))
// console.log(findLadders("cet", "ism", ["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"]))
