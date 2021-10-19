const data = [
    {


        id: '1',
        title: 'Neurological care',
        description: 'Neurology is the medical specialty area that focuses on the central and peripheral nervous systems. The brain and spinal cord comprise the central nervous system (CNS). The peripheral nerves include the sensory, motor, and autonomic nerves that branch out from the spinal cord and extend throughout the body.',
        img: 'https://orthoneuro.com/wp-content/uploads/2021/04/doctor-10.jpg'
    },
    {

        id: '2',
        title: 'Cardiologist',
        description: 'A cardiologist is a doctor that has extensive specialized training in diagnosing, treating and preventing conditions and diseases of the cardiovascular system, which is composed of the heart and its blood vessels. Your cardiologist will work together with you and other health care professionals to devise a treatment plan designed for your individual needs.',
        img: 'https://st.depositphotos.com/1000423/3080/i/600/depositphotos_30809335-stock-photo-doctor-with-tablet-pc.jpg'
    },
    {

        id: '3',
        title: 'Traumatology',
        description: 'Physical therapy in the field of traumatology emphasize the importance of physiatrists and physiotherapists in hospitals and private practices. Apart from bone and joint fractures and soft tissue injuries, the physiatrists are facing with an increased number of physical trauma caused by aging and everyday accidents.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKF-7II-fQ8qpKjO8oQg3Cnky-DXNEOAVGBg&usqp=CAU'
    },
    {

        id: '4',
        title: 'Dental care',
        description: 'The Department of Dental Sciences offers expert care and services to patients of all age groups and also with special needs. The team renders routine and advanced diagnostic procedures and treatments such as oral and maxillofacial surgery, orthodontics, advanced conservative treatment, periodontics,  pedodontics, aesthetic dentistry, dental implants, restorative dentistry and endodontics. The department also focuses on providing dental education and managing oral and para oral health needs and problems of a patient.',
        img: 'https://static.showit.co/1200/NVyu1HUlT1i7YcsOdIg2Sg/84619/fmc-dental-clinic-background.png'
    },
    {

        id: '5',
        title: 'X-ray',
        description: 'Dr Ryan says that they are a type of electromagnetic radiation (EMR): An example of low-energy EMR is sunlight, and an example of high-energy EMR is gamma rays that can be generated from radioactive material. X-rays are in between these two. Excessive radiation adversely affects living tissue. For instance, sunburn from ultra-violet radiation, or mutations from exposure to high-energy gamma rays.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIA5sBNtFqoUqVDhWNVbiQWrVfsnVFvUu78g&usqp=CAU'
    },
    {

        id: '6',
        title: 'Laboratory and diagnostic care',
        description: 'Clinical laboratory test results are an integral part of patient care, having an onsite full-service laboratory guarantees that results are returned in a timely manner and since we control the entire process we can assure our physicians and patients that all our testing procedures comply with Federal Regulations and include the latest advancements.',
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGBgaHBgYGhoaGhkcGRwaGhgZGRgaGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrISs0NDQ2NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ/NDQ0NDQ0NDE0NDQ0NP/AABEIAMkA+wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xAA+EAACAQIEAwUFBgQFBQEAAAABAgADEQQSITEFQVEGImFxgRMykaGxFEJSwdHwYnKC4RUjJLLxBzOSwtJD/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEAAgICAwABBQEBAAAAAAAAAAECEQMxEiFBUQQTIjJhkUL/2gAMAwEAAhEDEQA/ALNMUZOnELcyIw4URPshlUzkuLNDwjjCbM3xl9T4gh2YTGUOAO4uDEfglddvkSJDNYukbtaynmI4MOs8/IxKfi+scnGa6b39QYqHZv7xZiKXahx7yw6j2qTmCIUPkjUzN9qn7oXqwHzhNLtDSb7wlRxfGLVqIqm/eBjJk+jT8OWyDyhchwwso8pLeBaFnRLxYAdOiXnQAWdEiwA6R1zZTJIPjWshgBkMXq7HxMHyyd9SZE5ABJNgNSToAPGX4YoS0QiYzj3bZVumHAY86je7/Qv3vM6ecxGN4k9Uk1Kjv4MSQPJdh6CSbKDZ6/V4lRQ2etTU9C63+F4UjAgEEEHY8j5Tw72h3Gn0+HOW9LjhKKi5kYX1Q2v0va2v9pLbXg/t/wBPXAsuOCpPGcF2nxNKqFL51Ve8rgXv95bi5v4z13sfxSniKedDsbOp95G/Cw5fnGmmZSi4mkIkFQQgyF5SIYORKutU1MtXmdxT99vOUSyDNH02vBwZLScDU6Aak9AI2Zrs2fDl7ghbW5zI4Ttvhe8qMz5NyBp6E7xmM4+aq517lK2gOjN6dJhdndGLpIvsbxXDUwS7oPmfhKin2n4c7ZPbICTbvDLf1YTzDtDx3MxUTNPXzHVZmpSNvsr5Pol+D0XFwFIPMW+sCq9l6Z208jPJezXajEYRhkYvT502Olv4fwny0ntPAON08XSFWmfBlPvK3NSJcZWZSx8TO47szkUlWMrOC071lHQn5TecVe1NvIzHdnUvWv5/WWZNUbymNBFnLtOgWdOnToAdFtOE4woDhFiCcYALAeKNZDDJW8abuQE9GctPPO3XHs16KN3Bo5H3m6fyj5nym44xivZ0Xe9rLoehPdB+JnkHFiA+XlcafX85ddE416V1c2ED1hlcb3OpubecaqZjYdPy/wCZJvsgDRwJU3G/0khp2JBGsUC+sB0FYVCXQ3O92N9xqdT/AEmaLsnxZsLWFYNmQXzjmaZ1tp7x71xcbqNpQYZ7KT1BX1KN/wDP1h+CoXpZfvFbW6lHA+OU2t4TKXRSSao+i6VQMoZTcMAQRzBFwYjiU3Y+sXwiE/xAeQY2/fS0uzNIu0mcko8W0C1tjMliqnfbzmvxI7pmIxR77ecsyY5Wmd7b8VKUciGxfQkdOYEtcXXyKTzOgnnXavHmo5F+6mg8+cicv+Tf6bGv2ZpezHZYHCpiXdg7v3EHu5F3LedifhJeMM9ZgKOay6abfCaPFutLh+FIF1NFVW34iognZ6hUpoXsoDA2Nu9f1jUY8G2/6bxbclXr/wAPNuJ4aojWdWU9GBF/K8iw2Ga9zcTc8cpNWV1I1Ugi+pvz18ZV8GZUbLWXKOpGnr0mcVzja38em8lwlT18+A+CwGfS9jymr7B1Xw2LCNfJV7jdM41RvqPUSfD4KmbMtvTaWNLDhmUDfMtj0IItOZylGRpKKlBmw7Qvak3lKDsqnfJ8pZ9pnIp2O+gg3ZOnufGdnh5j2aqdOnQRZ06cTOBh6B06dedeFgdOnCdDwDpT8cbQCXEoeNvqBBEy0Z/i2BNai9NbZnWy32zfdv4XtPM8f2QxiMA9Ikn72mQeRB10nrtA2YHxH1jOIY25I/escpcYl4I8meWYb/p/VbVqihjve5t8prOAdh6VDvO2dyLE2AVVveyKb6mw1JPptLcV9YZRr3nI5yez0Vjiu0jz7tn2VIcVaY7pNmH/ALfEfOYaohQ6jQEgz3jFgspFrzzzj/Zp2zMqHvEG23gdTp01vt6zSE66Znkx32jGe0IDL4hv/HfXlpf4y/SlXWmzfZ6uVczAimxALDMS2m1xDeC8DAdc1ncXLNa6qF1IS+5uQM3jpbntWrKtlar7MkdxwzAqwuFuuxUAAWPjDLKqFgx877DP+m2NDU3pg6KVdfAOLEeV1m1mX7Mp/qKhKKhFKkCFAtcvUzWI3GZTbwImommPSOLOqm0D449wzE1dz5zYcVeyGY4tNEc8tlD2gxBGRF95ibeHUzzviKEk+pm24016judlXIvmfeMsOwvYH7V/qcR3aJNlp65nCn734VPxPhMv2k2d0KhjSYb2KxP2vhqUjvRfL6DVfkZoeLgpSQKNje3WaZ+G0qSn2VNEvYsEUKDYWvYc7AfCZjjmIGdByWxPxin0isKtlPisMwJJW2axPwgD4ZWUrYXl9xDFBzpKpaJvMHUX0dsba7M4mJbDuy6hbXA1tc7W6TWdjMWa1VEcWYd6/IgdILi8PTcgOoLDaaXsrwQBhWOgHuD0sT8zOhTWSuSt/PpyZE8ade+eBPax9APGE9l0sl5Wdp3u4HnLvs8lqa+Uvw4vS4nRs6BYpMSdOioDp06dCgHLOjYoMYCmZvirXeaJzpMvj2u5jWzOWhtCkzXsNheC8VRb+POWGCqgGxG+2ttfHwgPF0NMEiiHQC9ropGvQJrHKPJUa4ZcWAEKJNTrIN3A9fr0lY+Kq1NcPRBAB2DM++tlSx/YmafiTF8vsg5zWZXuCCDrdXub76XE53hXrO5ZW+qPQ8FVWqcqMG6ke6D0LbRa7LbSza77rpzHz/vKfh5dkAICX1AUaDpf+0tsOCBmtcDUjkGH7+UOKWgbb2Vi8LWmxa+5BsPK+Um34jflqokfFsIHKIGKlu6Ta623ub89/lDsU95PhsB7QAkjTbS5HiDcWmMrka4moOyy7O0sqt17i35lVBAufj8ZcXlXWrJhkVrEqbKTuQRma5sOfe+AHOH0aodFcbOoYX6EXE6sf6o8z6i3NyK/jlSyGZNpoOOvsJmqh1M1OVs03AeySEGpiaauze6jC4RfEfiM1qUwoCqAABYACwAGwAi1awUXMG+3A7bxKPwdbdjKpuTMN2mw2R7/AHW1H5ibh3B12Mp+0eA9rSIGjKQQfr8pGaPKJphnxds8+pYuzWMtKdS4uJZUuzdDJZixf8V/oJHT4EyGyuGXxGtpzPDI6V9TBkPCOGviWJ1QKSM+hB8BNtw/DeyphM2a19dt4FhnCKFUAAdJO+K0M6IY1E4sudzf8M1xt81X99Zq+FiyL5CY3Evmq38R9ZtMEwyCWYphl40PraDY3FhFudybDzMquHYljUFydbg/rIlKmkaKLabNBOEjzxc0sgkiXjFcGLeAx14sbecTABtZrKZUYfA5mLuNL6Dr4nwhlPiFNyQjo9t8jK1vPKTb1khW122PLx33tuD8RKQ+N7EOFQd7KAR0H5CBYyl7RsguBza2w8PGWIJOpFvDpHBQBFYyDAYKnRWyKFU6k8yepJ3/ALzIdp1pPVLqAHsFZ9Be2x8dNL+A6S74zxjI4RRYkBr8gOdvHSZTiHEadQZUBzDc2sPiZnOXh14Md/kyXDZQNyfL9doUap+ny5nrKvA1SDY+ks3GkxcrOiqGlrmWnC61jaU+xjkxWQ+P71kUTIveOPnw7oDZmBCkGxDfdIPI3mgo4YCmi391QL+EzPDsI7lXfRQQwXmxGoJ6Lex8bdN77iFdsgVDZ3KopG65j3m/pQO39M6cUWo2zkzOLdIr+NcJLLnTvW3Xmbfh6+UxjGerAWAAgdXhlBiWakhJ1JKi/rNLOd4kwKvVYgi5NvnIUOnTqY2rXLEk2B8NvhIQh6/OaspFgjeslBBEFoMY/EkhTbmPpM2Uim+0KXdBuhtbw5GTBpSYMP8AaHLqLMAUYfh6GX+Gp5jaTF2jGaqVIQGR4lu6YSMOdYFjjZSJZLi1spaer+s0QxRRPpM/gUu4ljxOsEGvkIqb6WyopXb0gSrjXqOM98qmW2BazE+FpR4aoXuvrLzDrYTKWKUZpSNpZE4NxCzijJ/tGVbnfkIKiWUt6D84FgXZyxOqjS/5SpSSdEQxtx5FzhK/M7mFGuJTrO9oZdGSkXSPedXZcveF1OhHI+B8JBhX0i40AodQOY9NbRLZSYHi8FTr2Lgq41SohyVEPIo41Hkbg7EEaQWlxB0c06urpY5gtg6MbLUUbBge468iVIsGE7DYzvZADfe1jIsVTNWrTyDvoXDHpTemwZSeV3FI2/gEfpqn0Wq8TTo3wH6yZKuf3dfoPOA/4WF9+oPQW+ZOnwhaV6SLlFRB17y3J8dYKIrJDg0a65b33Y+9fe4PLaeY8cwpwlUoULliWUg5VynUakHx2vtPR/8AGKCffDH+EE/QSr44PtNPOqkW1TNYEg6ddOXraKULRrhycX3oxOGSoTmORBb3Rdj6sbaektaWKBFidRpABwrEj/8AGofGxPwI0lFxniz4chSjZ2uLn3RbQ3tq2vIcwRfSYfak/Dplmj4zQ43iKoOrHRVG7HoAJc9n+DtpVr6udQnJembkT4bDx3mP7KYsrik+0ogzgJTex0c+4CxNsr7Ai2uXreerIk3hhUe2c2TM30hyyWjRBcObkqCo6DNbMbddAL8tepjaax2IohxlOx28xzmsmZxRYFp0o6/tKdhTcnwbvD5/lF/xaoN0W/rIooYa1PkSP6byN3Q7MSf5bSJRfcH0kiIeQI87TRmaJqB8flDLXEERfEfGE0z4zNlplbiMPZwBsdR584ThqWW8IrKNNNjpEVt4kS1+VjAO6ZS8UuBL4sANYK9NWbMdh9Y9kS7aRXYDh+RM7e+RoOg/WUuPzlyTqOU1NckwMURmuRcHQj8xLjLg7RUo3GmVHDDd/ctob/3mjw1HMegG8kXBqB3FGvMD5mSVnCjKNoZZqTszx4296I8Q4Jty2tGUaahcqkKN9b3v46Qd3tJ0Gk54rk3Z0yfFKidcHfn8I9cCo6n1/SFDTScZZlxiRrTA2EftBquNRedz0Gvz2gGL4i5X/LyqfEFjbwGwPneFj6Ras2sz3HeJJg2GJZWYMyoFXKD7j3IJHQGUQ7U4liVpKhe4UO7BybmzdxCAhGndt9IV9oSrkpYigTWZFGevmGpsrPSp5clMBiDfQ6bEC8qvQNBhcctel7QA2YHRhZlN7FWHIgggjwjsFhQQxtsIzD08gZcuXKQOt7AC+a3eOlr+EPwWigfiJ+Q0lpiqinwuFVnN/PxPgJb4lO5YC19LeA2EZhqNnB84YVv5Xg2MreJtUOHdaJy1BSZg1r5TlOTTmxI08r9L+X0ETFYXChvfCsgJ3zobMrH+I2bzbx09lQKqnLzNz52A19APhPKu0HZ5sIzujH7K7F0CgXp1WCqyOSD3bKCv8tjrqWmTRVcTph6a4du62cBTzFzYrfl3ip+PWeocB9uKCLiQPahdSPvAaAt0e1sw6/Kl7KcANR1xlazWUCkLWLHnVfkx0AUgDmdTYza1WXnqQbgc7/lE5F8bI1Xl8Zzve1vSNKk6tovTr5mKo5yR6H2Akfshzj78/hOURCszCcTqIQGsRte31lgnEb7oD5StxtK6wTCYsobHUCaE0aan3tQtvCSotuUAw2KD2tJmxNm0OkTQ7oP3EhCaW8YiPHqbmQOwbiF9ADIQ3dEsatBWFzFo4dABpfzgL0ESkxGgJheG4eBq/wAP1hQq22E6m2a9zAdivYCw0lHibgkHr8pa1DYyPEUlKZiNYnGxcuKdFXSRB4+cIpi5HmIOBqIVhx3h++UEktGcJOXbDyYx3sCegJ+ERmg1VwQ9+Qt8iT9RBmhSrJVEmWmnQ7X0P/MkwSKWBzDQ3sxAvb0/KFGbG4LgTIWZ2ViXerf7wL01RV25ANrIuO4Q1qaMtvaIbrmNgfuujHkrDQy8r1zbVfgQfraVla9zlG+tttdjbr/aaIodh85UGpbNYA21vlFrs3NiLdNoRTNivhOvrGudrdRArYalPvXjoPWqW5wdqxgBPiUB+8VP4l39RsR4GD+yLo9OuqVKbCxI0zajulDsfEHlfSSUaebUnQbw0KMo00PKJjRDTctoLKo0yrytpa4+gkqIBtHZQNpxNhJHZFWbUCNU3Nvj5SJ6msIpUyB4nf8ASNgc+pA5COvGAEakQWrxBQSOnhBKwKrEjQyqVO98ZZ1DAKgtrGxIGwFbK2UnS9vKW9QHKTIcLw1HQuXsbnQSwoYdSmXN6wJbOwNUso1lhhzzlPwoWLi9wDa8tlNlvKSsbdE9RtDOUaD0kdUXUR7Hl5TOxoesjr1so0j0QmdiaQ5gwXbE2CV6506mSPXuuWB13GcAAnWSvVVHVTu17eguflc+kdEtWivx3EAlelTFu+zJruSEd7jp7ktMM3ePl+kpeJ8JR8RSri6vTYkWJsbqynTbZjt0lsh5+BiKcUn0MxGKLOaaFAwCuxa5CqxYL3QQSSUbmNpWcUwmKq06iJUpLnt3lNSm62KXCsM1iQpGblfnKtuEVnxL4pMQad1FPIFDKwRie+CeraWsRrrrNDh6dYDV6bHwV0/9mmbbs0ik0V9Lg7lQC+Jokc1qLXDcu8aockfCMxvD8bTXNh3pV7DWm4ajUOn3XVshJ6FV85oFLjdQf5T+RtCaT5vukfzC3wvEpSXo3GL8PKz24NFsmJw9WhUuQVspPndwGI03Fx4mavA9o8OMMMTUZ1Q2AYrmOrBR3Qb6kiabH4CliEalWRXRhYqwv6g7qehGonn3aXsTivYHD0aoegGUouVFcAHRWOgNt73F7bTRTbM3BIvE7aYBgP8AUop6MSvxuBaWOC4vh6rD2eIovr92ohPwBng/GOAVsLY1QCC2TcBr2J5E8ufjNH2S7Cpi6LVqlR0XMUQJa9xbOzZgbrrYWtsZVthSR7DXe5MSkubSeecL7D18NUU08Yxp5lLL30OUG5FlYqenLeejJlpqFJNyBc7m3iTuZQiWq1xlXb96w2oNAIFTxCkd0WF9zztrJHrXiaGictI6z2EHU6iI93aw9YqGTYdOfrClMiAiu9heILEr1LbC55CDLhup15+cbhMzsznbZfzP5ekPt4R6E2ZVzA8WdJNUfWBYp9DGIOwK/wCXfqYWxsunIGRYKl/lJ4mWGKw9kJ8JRL2QcO/7a+Ovxh1VwoAIvBsFTsiiDcYruGVU310AuYaixvZanEhhbLb1vI1c3g/DqVQIGqaHoQIUuI/hExY9k71DlkVeuxtcxamIDLbLb1kRXYyo6ExmGvnAtFxaWq3I2RjfkBdQdeWlx5Xi4c98GEYhze8LKRR4mgVsyMVAN8u6HyB93+m0gqccKaPRcDqrK49b2Ii4tEQkglL6924ufFdj6iZ3iHEXIKEgrtfLYkeMnvwt0wipxmxHs2ILvkVWUEF8pa3O2inW4l1g+IYjZ6Kt4q2X5G8xLNlbDnkv2rEHyp0cq/Npd9jePVqtFDUyOxLC9spOWw1tcXPe2AEGiYtJ0bTDYo21Rx6A/wC0k/KHI8AoYltsjemUj63+ULR7jYjz0mZoyZDrJ/AwVDHl4AYLtZ2TapXVmDVKDG+nvo3LUC4U66jyPK9rwbAJQpJTRWVBmIDXzd5iSSTrqbmaj2sfSpoygFQRra4Bty0mkZu+yHEp6BA752HzMgJLt4n93Mu6+BQ6WI8ifptIk4cFHdY+upPqOU1UkQ4sFJAso2F/+fnHFoq4JwxJAIsALHzvv6SJww95SPPb0O0dgSK3Tc6QqkmUePM9TB8Em7H08usJvEBKpgHEap0Rd2Nh+sMzWEip8Ob2gqMwsAbLzBPj5XHrFooIoIFUDkNI/PHMo6xMg/Yk2KjPYngNXdcrf1W+sEpdnq7NlZQg/ESpHoAd5fYftBhn0TEUyTyzC/wjzV31uOUpJk2QU8EFVUvfLzk7qGFitwJPhjcGQtUtcCUL0GRRfTaH4amLXtrAV5yfDYl9ihHjeEn0PbO4m5VTlFzM9xHiT0gD7Mv5Xv8ASa5BfUiSqo6TJqxrozHCcUatjkZfOXeLVQoHOTONSZA1r7axpUJlUiWfeWWIpgreSlF6CPRA11ibKRm2dK6VBQqIzqWQtbOEqAbMBva40vM3g+z+KCt7co7E3U0yBYXNwbgXG1tNNdTL/gvAKWCNUIzE1Kju2dhpmtZQBbQW3313l+MJfZxGJPvo8p47wzELny0HYfZ6tFcoU2epUDFj3tsotzgvB65o0UVkdGW97o47xYsbaeO89fqYQ22B9Zj+L9g2rVnqjF4imGy9yme6tlCmwvzIJ8yYgK+h26SkpaqrMq80U5uQtY6X56kbTRcH7XYTE92lXRmP3GureisAT6XlE3YJlUn7biT5hD9VMfU7JI2+p8VB+UlxLUjbCoBInxHjM9huB1kXuVtOSsGt+dpN9kxI3Ct/K362kuL+SlIuhXEdh8WA9JL+/wC0sOZy3b6CUAeqpIam4HNspItbllBvt9JWVeMZcRSqMrIlMgBSCDkIKnTrZiZNtPs0Ub0ehudowtaPSororowZWFww1BB5xpE2MRyVLxGg7qRqI5at94ASrbpHWB5CR3nZoWKh6hQb21ElWqJATfzjQ0LCid7HkLiRe1PQxrNYgwapUcEgHTlr11jGAN2awxIPskBBuCBbUQ2tTyW6cpMpB2nV6eYWvKi6ZBPw+1jIKyWvH4HCtrrFxFRR3T7wg3+XQkq7ZFTTUQxYJTqC9gYQ1TKNYpdjsh4ji3pgMqF+qjeS8MxTVkzNTen4Na58dI9GzC8nDEC0kBmJFtoE6G1+cKdSecaafWO+hENClfeEU1ym/oYqIBziulxEMjxdNSb2vf1gWICA6kKfH9TDzoAJzG+4iY0B0VFtH+DG0eMw+/ppvb6yRsJTO6LfrYD5iRVOHIQRdgDyzEj4G8QdBAcxQ/gJW/4OB7rEfEf7SJxwlZdnJ8z+oMLGWWYcxEKqZWZsQvIN/T+Yb8p329x71P4E/mB9YrAs1pjw9YvsFLXKqf30MrV4ovNHHoG/2kyVOJU/xgfzXX6wtD7LJKSqLKoUE37oA16m04rBkrg7MD5EGSBzHaCxWUSJ8PfbSPeuRyv5Roxq9CPQx2KyP2TjxiEMNwZOuKQ/eElV1OxhY7AS0ejX84Y5UbkSBq9IfeHp/aFgRVBpIc8kq4hDoL3+Xzg3s4J2AzCUip30lgVg9PeFSyB9G67QLG4POxa9iekNSIZL2HhWcO4cUfMzEjpLyqy22vBU3jnj8BCBrR4aRx6RIBXa0aKgnV4IIAGZrxwg9LeTVIwHu+kivF5RpksaFDRymRiPWIZIDFjViwGLaNKiLOgBG1BTuoPpImwCfhhMUQArn4Qh5fISI8MYe67D1b9bS3nGICpo0aytqc622uAQfOwkxqkbo49Lj5SwjGiYFDjKyC7FsvmCPrB8Ni6YN84+NhCe0X/Zfy/OYbB7CAGpxHEtbBl87ZoyhjXtazOetgolfhpb4eABmCfXM48lAv8AEkwz7Wn4T8v1gMSAH//Z'
    },
    {

        id: '7',
        title: 'Pharmaceutical care',
        description: 'The pharmaceutical industry likes to depict itself as a research-based industry, as the source of innovative drugs. Nothing could be further from the truth. This is their incredible PR and their nerve.',
        img: 'https://media.istockphoto.com/photos/doctor-prescribing-medicine-to-a-patient-in-the-office-picture-id1270296459?b=1&k=20&m=1270296459&s=170667a&w=0&h=TsSCgGoLh7q62iRed_pZPJo7kH0uQ_9N2DVnFHtrnCo='
    },
    {
        id: '8',
        title: 'Nutritional support',
        description: 'A healthy lifestyle has become a major priority in the quest for meaningful living and, as all the experts tell us, nutrition is its anchor. Whether its good food, health food, or diet food, what we eat has inspired some wise, funny, and informative quotes that are perfect for sharing with your next nutritious (or totally unhealthy!) meal.',
        img: 'https://pubmiddleware.mims.com/resource/image/14E002C1-C283-4649-AAA1-AA4D00E38665/OriginalThumbnail/THUMBNAIL_RPT1216_course.jpg'
    },


]