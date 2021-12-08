import time
l=[]
l2=[]
num=input("ENTER NUMBER OF TASK TO REMIND")
num=int(num)
for i in range (num):
    print("what shall I remind about you?")
    text=str(input())
    l.append(text)
    print("IN HOW MANY MINUTES")
    local_time=float(input())
    l2.append(local_time)
for j in range (num):
    if j==0:
     local_time=l2[j]
    else:
     local_time=l2[j]-l2[j-1]
    local_time=local_time*60
    time.sleep(local_time)
    print(l[j])
    
