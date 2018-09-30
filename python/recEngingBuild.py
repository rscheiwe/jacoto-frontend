import pandas as pd

userCourseData = pd.read_csv('tags.csv')
userCourseData.head()

#list of unique tags
tagList=list(set(userCourseData["TagId"].tolist()))

#count of users
#Seed users via randomized algo
userCount=len(set(userCourseData["TagId"].tolist()))

#Create an empty dataframe to store tag affinity scores for tags.
#data-science, humanities, economics, technologies ...
tagAffinity= pd.DataFrame(columns=('tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'score'))
rowCount=0

#For each tag in the list, compare with other tags.
for ind1 in range(len(tagList)):

    #Get list of users who bought this item 1.
    tag1Users = userCourseData[userCourseData.TagId==tagList[ind1]]["userId"].tolist()
    #print("Tag 1 ", tag1Users)

    #Get tag 2 - tags that are not tag 1 or those that are not analyzed already.
    for ind2 in range(ind1, len(tagList)):

        if ( ind1 == ind2):
            continue

        #Get list of users who liked tag 2
        tag2Users=userCourseData[userCourseData.TagId==tagList[ind2]]["userId"].tolist()
        #print("Tag 2",tag2Users)

        #Find score. Find the common list of users and divide it by the total users.
        commonUsers= len(set(tag1Users).intersection(set(tag2Users)))
        score=commonUsers / userCount

        #Add a score for tag 1, tag 2
        tagAffinity.loc[rowCount] = [tagList[ind1],tagList[ind2],score]
        rowCount +=1
        #Add a score for tag 2, tag 1. The same score would apply irrespective of the sequence.
        tagAffinity.loc[rowCount] = [tagList[ind2],tagList[ind1],score]
        rowCount +=1

#Check final result
tagAffinity.head()
