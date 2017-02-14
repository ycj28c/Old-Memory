/******************************************************************************
 本程序为c模拟unix的more命令
 可以使用more 文件,more -c 文件,more -d 文件,more -cd 文件,more +line -行数 文件,
 more -行数 lines 文件,more -pattern 文件,more -help指令
*******************************************************************************/
#include "stdio.h"  
#include "string.h"
#include "stdlib.h"
int main(int argc,char *argv[]) 
{
 FILE *fp;
 int count=0,i=0,x=0,y=0,a;
 float z;
 char ch;
 while(argc>3 && argc <5)
 {
	 if(strcmp(argv[1],"+line")==0)
	 {       
		     int num = atol(argv[2]+1);
		     fp=fopen(argv[3],"r");
		     while((ch=fgetc(fp))!=EOF)
			 {
			    if(ch=='\n')
		      	count++;
		    	if(count>=num)
				{
                  printf("%c",ch);
				}
			 }
	 }
	 else if(strcmp(argv[2],"lines")==0)
	 {
		int num = atol(argv[1]+1);
		fp=fopen(argv[3],"r");
		while((ch=fgetc(fp))!=EOF)
		{
		    printf("%c",ch);
			if(ch=='\n')
		    count++;
		    if(count>=num)
			{
              count=0;
			}
		}
	   break;
	}
	else
	{
		printf("your make wrong");
	}
    exit(0);
 }
	 
 while(argc>2 && argc <4)
 {
	 if(strcmp(argv[1],"-c")==0 && argc>2)
	 {
		 system("CLS");
		 while(i<1)
		 {
		 printf("to continue...\n");
		 i++;
		 getch();
		 }
         fp=fopen(argv[2],"r");
		 while((ch=fgetc(fp))!=EOF)
			 {
		     	printf("%c",ch);
			    if(ch=='\n')
				count++;
		    	if(count>=24)
				{
                count=0;
			    getch();
				}
			 }
		 break;
	 }
	 else if(strcmp(argv[1],"-cd")==0 && argc>2)
	 {
		 system("CLS");
		 while(i<1)
		 {
		 printf("to continue...\n");
		 i++;
		 getch();
		 }
         fp=fopen(argv[2],"r");
		 while((ch=fgetc(fp))!=EOF)
			 {
		     	printf("%c",ch);
			    if(ch=='\n')
				count++;
		    	if(count>=23)
				{
                count=0;
			    getch();
				}
			 }
		 break;
	 }
	 else if(strcmp(argv[1],"-d")==0 && argc>2)
	 {
		 fp=fopen(argv[2],"r");
	     while((ch=fgetc(fp))!=EOF)
		 {
		     if(ch=='\n')
				y++;
		 }
		 fp=fopen(argv[2],"r");
		 while((ch=fgetc(fp))!=EOF)
		 {
		     	printf("%c",ch);
				if(ch=='\n')
				{
					count++;
					x++;
				}
				if(count>=22)
				{
					z=(x*100)/y;
					printf("--more--(%.1f%%)[Hit space to continue,Del to abort]\n",z);
					count=0;
					getch();
				}
		 }
		 break;
	 }
     else if(strcmp(argv[1],"-pattern")==0 && argc>2)
	 {
		printf("what it means?");
		break;
	 }
	 else
	 {
		 if(argc>2)
		 {
			 int num = atol(argv[1]+1);
		     fp=fopen(argv[2],"r");
		     while((ch=fgetc(fp))!=EOF)
			 {
		     	printf("%c",ch);
			    if(ch=='\n')
				count++;
		    	if(count>=num)
				{
                count=0;
			    getch();
				}
			 }
			 break;
		 }
	 }
	 exit(0);
 } 
 while(argc>1 && argc<3)
 {
	 if(strcmp(argv[1],"-help")!=0)
	 {
		if((fp=fopen(argv[1],"r"))==NULL)
	    {
		  printf("error!");
		}
		else
		{
		while((ch=fgetc(fp))!=EOF)
		{
			printf("%c",ch);
			if(ch=='\n')
				count++;
			if(count>=22)
			{
                count=0;
			    getch();
			}
		}
		}
		break;
	 }
	 else if(strcmp(argv[1],"-help")==0)
	 {
		 printf("Star (*) indicates argument becomes new default.\n");
		 printf("---------------------------------------------------------------------\n");
		 printf("<space>                Display next k lines of text [current screen size]\n");
	     printf("Z                      Display next k lines of text [current screen size]*\n");
		 printf("<return>               Display next k lines of text [1]*\n");
		 printf("d or ctrl-D            Scroll k lines [current scroll size, initially 11]*\n");
		 printf("q or Q or <interrupt>  Exit from more\n");
		 printf("~\n");
		 printf("~\n");
		 printf("---------------------------------------------------------------------\n");
         break;
	 } 
	 else
	 {
		 printf("you make wrong");
	 }
 }
 exit(0);
}