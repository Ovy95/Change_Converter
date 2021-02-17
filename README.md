# Review 4

Change Converter

Create a Get change convecter Value will be given as a float. return an array of the change given 

## Examples
'''
change_generator.convert(7.42)
 => ["£5", "£1", "£1", "20p", "20p", "2p"]
change_generator.convert(40)
 => ["£20", "£20"]
change_generator.convert(16.30)
 => ["£10", "£5", "£1", "20p", "10p"]
change_generator.convert(19.99)
 => ["£10", "£5", "£1", "£1", "1", "£1", "50p", "20p", "20p", "5p", "2p", "2p"]
change_generator.convert(76.81)
 => ["£50", "£20", "£5", "£1", "50p", "20p", "10p", "1p"]
'''

Input     ||      Output 
___________________________
20        ||        £20
10        ||        £10
5.00      ||        £5
1.00      ||        £1
___________________________

0.50      ||      50p  
0.20      ||      20p 
0.10      ||      10p 
0.05      ||       5p 
0.02      ||       2p 
0.01      ||       1p 
___________________________

First tests return single values 
