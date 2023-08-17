import { StringTrees } from "./StringTrees";
import { TrieNode } from "./trieNode";

export class Trie extends StringTrees{
    constructor(){
        super()
    }

    insert(word, i){
        let curr = this.root;
        
        for(const c of word){
            if(!curr.children[c]) curr.children[c] = new TrieNode(); 
            curr = curr.children[c];
            curr.words.add(i)
        }
        curr.end = true;
        return
    }
    search(word){
        let curr = this.root;
        
        for(const c of word){
            if(!curr.children[c]) return false; 
            curr = curr.children[c];
        }

        return curr.end;
    }

    startsWith(prefix){
        let curr = this.root;
        
        for(const c of prefix){
            if(!curr.children[c]) return false; 
            curr = curr.children[c];
        }

        return true;
    }

    build(words){
        this.words = words;
        for(const[idx, word] of this.words.entries()) this.insert(word, idx)
        return
    }
    //Used to return the associated words, given that we have a word list alreaady
    complete(val) {
        let curr = this.root;
        for(const c of val){
            if(!curr.children[c]) return []
            curr = curr.children[c];

        }
        const res = [];

        for(const i of curr.words)  res.push(this.words[i])


        return res
    }
}