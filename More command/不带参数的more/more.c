#include "stdio.h"
#include "stdlib.h"
main(int argc,char *argv[])
{
	FILE *fp;
	int count=0;
	char ch;
        if(argc!=2)
	{
		printf("格式错误");
	    exit(0);
	}
        if(argc=2)
	{
		if((fp=fopen(argv[1],"r"))==NULL)
		{
		  printf("文件不能打开");
		  exit(0);
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
				printf("--more--[Hit space to continue,Del to abort]\n");
                count=0;
			    getch();
			}
		}
		}
		exit(0);
	}
    fclose(fp);
}