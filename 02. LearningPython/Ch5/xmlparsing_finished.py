#
# Example file for parsing and processing XML
#

# import the xml dom module for the xml parsing
import xml.dom.minidom

# import os since it is not reading the file
import os


def main():
    # use the parse() function to load and parse an XML file
    # absolute path since in Windows we have to do path manipulation
    THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
    my_file = os.path.join(THIS_FOLDER, "samplexml.xml")
    doc = xml.dom.minidom.parse(my_file)

    # print out the document node and the name of the first child tag
    print(doc.nodeName)
    print(doc.firstChild.tagName)

    print("")

    # get a list of XML tags from the document and print each one
    skills = doc.getElementsByTagName("skill")
    # Number or skills
    print("%d skills:" % skills.length)
    # print out the actual skills
    for skill in skills:
        print(skill.getAttribute("name"))

    print("")
    # create a new XML tag and add it into the document
    newSkill = doc.createElement("skill")
    # add jQuery to the tags
    newSkill.setAttribute("name", "jQuery")
    # append it
    doc.firstChild.appendChild(newSkill)

    skills = doc.getElementsByTagName("skill")
    print("%d skills:" % skills.length)
    for skill in skills:
        print(skill.getAttribute("name"))

    print("")


if __name__ == "__main__":
    main()
