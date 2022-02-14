import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

class Solution {
    public List<String> getValidT9Words(String num, String[] words) {
        Map<Integer,String> map = new HashMap<>();
        map.put(2,"abc");
        map.put(3,"def");
        map.put(4,"ghi");
        map.put(5,"jkl");
        map.put(6,"mno");
        map.put(7,"pqrs");
        map.put(8,"tuv");
        map.put(9,"wxyz");
        int len = num.length();
        Trie t = new Trie(map);
        t.insert(num);
        List<String> list = new ArrayList<>();
        for(String s : words){
            if(s.length() == len && t.starts(s)) list.add(s);
        }
        return list;
    }
    public static void main(String[] args) {
        String num = "8733";
        List<String> words = Arrays.asList("tree", "used");
        Solution solution = new Solution();
        List<String> list = solution.getValidT9Words(num, words.toArray(new String[0]));
        System.out.println(list);
    }
}
class Trie {
    private Trie[] children;
    Map<Integer,String> map;
    public Trie(Map<Integer,String> map){
        this.map = map;
        children = new Trie[26];
    }
    public Trie(){
        children = new Trie[26];
    }

    public void insert(String word) {
        Trie node = this;
        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            int index = ch - '0';
            String s = map.get(index);
            Trie t = new Trie();
            for(char c : s.toCharArray()){
                if (node.children[c-'a'] == null) {
                    node.children[c-'a'] = t;
                }
            }
            node = t;
        }
    }

    public boolean starts(String prefix) {
        return searchPrefix(prefix) != null;
    }

    private Trie searchPrefix(String prefix) {
        Trie node = this;
        for (int i = 0; i < prefix.length(); i++) {
            char ch = prefix.charAt(i);
            int index = ch - 'a';
            if (node.children[index] == null) {
                return null;
            }
            node = node.children[index];
        }
        return node;
    }
}

