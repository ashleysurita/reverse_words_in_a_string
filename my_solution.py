def reverseWords(self, s):
        str = s.strip().split(' ')
        
        reversed = []
        for i in range(len(str) - 1, -1, -1):
            if len(str[i]) > 0:
                reversed.append(str[i])
        
        return ' '.join(reversed)
