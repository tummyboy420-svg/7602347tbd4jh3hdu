window.DEFAULT_OS_CONFIG = {
    "customBadges": [
        "icons/badge/custom/1.png",
        "icons/badge/custom/2.png",
        "icons/badge/custom/3.png"
    ],
    "settings": {
        "wallpaperUrl": "wallpapers/1.png?v=2",
        "videoControlsScale": 2.5,
        "videoPlayButtonScale": 1.4,
        "videoVolumeButtonScale": 1.4
    },
    "desktop": [
        {
            "id": "my-documents-icon",
            "name": "my_documents",
            "iconType": "documents",
            "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" fill=\"black\"/></svg>",
            "action": {
                "type": "openWindow",
                "payload": "window-docs"
            }
        },
        {
            "id": "my-computer-icon",
            "name": "my_computer",
            "iconType": "computer",
            "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B0AEB8\" d=\"M20,18H4V4H20M20,2H4A2,2 0 0,0 2,4V18A2,2 0 0,0 4,20H11V22H9V24H15V22H13V20H20A2,2 0 0,0 22,18V4A2,2 0 0,0 20,2Z\" /><path fill=\"#98d2ff\" d=\"M4.5,4.5h15v9h-15V4.5Z\" /><circle cx=\"8\" cy=\"8\" r=\"1.5\" fill=\"black\"/><circle cx=\"16\" cy=\"8\" r=\"1.5\" fill=\"black\"/><path d=\"M 10 11 Q 12 13 14 11\" stroke=\"black\" fill=\"transparent\" stroke-width=\"1.5\"/></svg>",
            "action": {
                "type": "openWindow",
                "payload": "window-computer"
            }
        },
        {
            "id": "internet-icon",
            "name": "internet",
            "iconType": "internet",
            "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#2196F3\" d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z\"/></svg>",
            "action": {
                "type": "openWindow",
                "payload": "window-internet"
            }
        }
    ],
    "windows": {
        "window-computer": {
            "title": "my_computer",
            "width": 1050,
            "height": 700,
            "top": "5%",
            "left": "15%",
            "theme": "window-theme-blue",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "work-1-lmq5r",
                        "name": "work",
                        "displayName": "work [1]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-1"
                        }
                    },
                    {
                        "id": "posters-folder",
                        "name": "posters",
                        "displayName": "posters",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-posters"
                        }
                    },
                    {
                        "id": "fun-3-i5oyy",
                        "name": "fun",
                        "displayName": "fun [3]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-fun-3"
                        }
                    },
                    {
                        "id": "photos-2-v99r3",
                        "name": "photos",
                        "displayName": "photos [2]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-photos-2"
                        }
                    }
                ]
            }
        },
        "window-recycle-bin": {
            "title": "Recycle Bin",
            "width": 1050,
            "height": 700,
            "top": "28%",
            "left": "25%",
            "theme": "",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "deleted-photos1-g83xm",
                        "name": "deleted photos",
                        "displayName": "deleted photos[1]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-deleted-photos1"
                        }
                    },
                    {
                        "id": "scrapped-ideas-2-39ub7",
                        "name": "scrapped ideas",
                        "displayName": "scrapped ideas [2]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-scrapped-ideas-2"
                        }
                    },
                    {
                        "id": "payzapp-gamification-4fig-m9yde",
                        "name": "payzapp gamification.fig",
                        "iconType": "figma",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F24E1E\" d=\"M7.5,16.5A1.5,1.5 0 0,1 6,15V12A1.5,1.5 0 0,1 7.5,10.5H9V12H7.5V15H9V16.5H7.5M12,15A1.5,1.5 0 0,1 10.5,13.5V12A1.5,1.5 0 0,1 12,10.5A1.5,1.5 0 0,1 13.5,12V13.5A1.5,1.5 0 0,1 12,15M12,9A1.5,1.5 0 0,1 10.5,7.5A1.5,1.5 0 0,1 12,6A1.5,1.5 0 0,1 13.5,7.5A1.5,1.5 0 0,1 12,9M16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5H18V12H16.5V13.5M16.5,9A1.5,1.5 0 0,1 15,7.5V6H16.5A1.5,1.5 0 0,1 18,7.5V9H16.5Z\" /></svg>",
                        "action": {
                            "type": "openFig",
                            "payload": "file_sys/recycle_bin/payzapp gamification [4].fig",
                            "title": "payzapp gamification [4].fig",
                            "figContent": "[fig]\ntitle=PayZapp Gamification\nfile=Payzapp Gamification\nimages=[H] assets\ncomment=Sharvesh,This was in 2022. These gamification concepts were pitched to improve new user activation on PayZapp. Bank wanted these but due to change in leadership these were deprioritized.\n",
                            "figImages": [
                                {
                                    "name": "Home Nudge",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B1%5D%20Home%20Nudge%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 1,
                                    "row": 2
                                },
                                {
                                    "name": "boat on the water",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B1%5D%20%5B0x26879C%5D%20boat%20on%20the%20water%20%5B3%5D.gif",
                                    "ext": ".gif",
                                    "sortOrder": 1,
                                    "row": 3,
                                    "bgColor": "#26879C"
                                },
                                {
                                    "name": "home screen",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B1%5Dhome%20screen%20%5B1%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 1,
                                    "row": 1
                                },
                                {
                                    "name": "boat selection",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B2%5D%20boat%20selection%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 2,
                                    "row": 2
                                },
                                {
                                    "name": "boat designs",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B2%5D%20%5B0x26879C%5Dboat%20designs%20%5B3%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 2,
                                    "row": 3,
                                    "bgColor": "#26879C"
                                },
                                {
                                    "name": "milestones",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B2%5Dmilestones%20%5B1%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 2,
                                    "row": 1
                                },
                                {
                                    "name": "island rocks",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B3%5D%20island%20rocks%20%5B3%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 3,
                                    "row": 3
                                },
                                {
                                    "name": "to the Island",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B3%5D%20to%20the%20Island%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 3,
                                    "row": 2
                                },
                                {
                                    "name": "demo video",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B3%5Ddemo%20video%20%5B1%5D.mp4",
                                    "ext": ".mp4",
                                    "sortOrder": 3,
                                    "row": 1
                                },
                                {
                                    "name": "archipelago",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B4%5D%20archipelago%5B3%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 4,
                                    "row": 3
                                },
                                {
                                    "name": "milestones",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B4%5D%20milestones%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 4,
                                    "row": 2
                                },
                                {
                                    "name": "environments",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B4%5Denvironments%20%5B1%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 4,
                                    "row": 1
                                },
                                {
                                    "name": "on the Island",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B5%5D%20on%20the%20Island%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 5,
                                    "row": 2
                                },
                                {
                                    "name": "Flows",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B5%5DFlows%20%5B1%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 5,
                                    "row": 1
                                },
                                {
                                    "name": "mid way",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B6%5D%20mid%20way%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 6,
                                    "row": 2
                                },
                                {
                                    "name": "relic",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B7%5D%20relic%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 7,
                                    "row": 2
                                },
                                {
                                    "name": "completetion",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/%5B8%5D%20completetion%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 8,
                                    "row": 2
                                },
                                {
                                    "name": "progress nudge",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/progress%20nudge.png",
                                    "ext": ".png",
                                    "sortOrder": 999,
                                    "row": 1
                                }
                            ],
                            "figRowLabels": {
                                "1": "PayZapp Gamification Concept to improve activation - [1] Escape to the Galaxy",
                                "2": "PayZapp Gamification Concept to improve activation - [2] Island Adventure"
                            },
                            "figRowSpacing": {
                                "2": 26
                            }
                        }
                    },
                    {
                        "id": "payment-themes5fig-aytzb",
                        "name": "payment themes.fig",
                        "iconType": "figma",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F24E1E\" d=\"M7.5,16.5A1.5,1.5 0 0,1 6,15V12A1.5,1.5 0 0,1 7.5,10.5H9V12H7.5V15H9V16.5H7.5M12,15A1.5,1.5 0 0,1 10.5,13.5V12A1.5,1.5 0 0,1 12,10.5A1.5,1.5 0 0,1 13.5,12V13.5A1.5,1.5 0 0,1 12,15M12,9A1.5,1.5 0 0,1 10.5,7.5A1.5,1.5 0 0,1 12,6A1.5,1.5 0 0,1 13.5,7.5A1.5,1.5 0 0,1 12,9M16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5H18V12H16.5V13.5M16.5,9A1.5,1.5 0 0,1 15,7.5V6H16.5A1.5,1.5 0 0,1 18,7.5V9H16.5Z\" /></svg>",
                        "action": {
                            "type": "openFig",
                            "payload": "file_sys/recycle_bin/payment themes[5].fig",
                            "title": "payment themes[5].fig",
                            "figContent": "[fig]\ntitle=Payment Themes\nfile=Payment Themes\nimages=[H] assets/PaymentThemes\ncomment=Sharvesh, Although the bank liked the idea, their focus at the time was on meeting internal deadlines for ongoing feature deliveries, so development bandwidth was directed there instead.\n",
                            "figImages": [
                                {
                                    "name": "Amount entry screen",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/PaymentThemes/%5B1%5D%20Amount%20entry%20screen%20%5B1%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 1,
                                    "row": 1
                                },
                                {
                                    "name": "Cheers Theme",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/PaymentThemes/%5B1%5DCheers%20Theme%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 1,
                                    "row": 2
                                },
                                {
                                    "name": "choose theme",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/PaymentThemes/%5B2%5D%20choose%20theme%20%5B1%5D.mp4",
                                    "ext": ".mp4",
                                    "sortOrder": 2,
                                    "row": 1
                                },
                                {
                                    "name": "Birthday Theme",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/PaymentThemes/%5B2%5DBirthday%20Theme%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 2,
                                    "row": 2
                                },
                                {
                                    "name": "transaction processing",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/PaymentThemes/%5B3%5Dtransaction%20processing%5B1%5D.mp4",
                                    "ext": ".mp4",
                                    "sortOrder": 3,
                                    "row": 1
                                },
                                {
                                    "name": "Payments Success",
                                    "path": "file_sys/recycle_bin/%5BH%5D%20assets/PaymentThemes/%5B4%5DPayments%20Success%5B1%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 4,
                                    "row": 1
                                }
                            ],
                            "figRowLabels": {
                                "1": "We explored payment themes for Payzapp as an internal project to pitch to the Bank. \r\n[2024 End]"
                            },
                            "figRowSpacing": {}
                        }
                    },
                    {
                        "id": "opinions-6txt-284pa",
                        "name": "opinions.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/recycle_bin/opinions [6].txt",
                            "title": "opinions [6].txt"
                        }
                    }
                ]
            }
        },
        "window-internet": {
            "title": "Internet",
            "width": 1024,
            "height": 768,
            "top": "10%",
            "left": "10%",
            "theme": "window-theme-blue",
            "content": {
                "type": "mock-browser",
                "searchQuery": "More details about sharvesh",
                "searchResults": [
                    {
                        "title": "Linkedin | Sharvesh",
                        "url": "https://www.linkedin.com/in/s-sharvesh/",
                        "displayUrl": "linkedin.com/in/s-sharvesh/",
                        "subtext": "Designer crafting functional and delightful experiences across digital products."
                    },
                    {
                        "title": "Instagram @sharvesh",
                        "url": "https://www.instagram.com/_shxrvesh_/",
                        "displayUrl": "instagram.com/_shxrvesh_/",
                        "subtext": "Collected echoes of me and the world I pass through."
                    },
                    {
                        "title": "Twitter / X @sharvesh",
                        "url": "https://x.com/sharvesh",
                        "displayUrl": "x.com/sharvesh",
                        "subtext": "No tweets yet, just warming up to share my thoughts and what I'm upto."
                    },
                    {
                        "title": "All fun and Games - Gabe Newell",
                        "url": "https://youtube.com/watch?v=MGpFEv1-mAo",
                        "displayUrl": "youtube.com/watch?v=MGpFEv1-mAo",
                        "subtext": "I loved Gabe's perespective on game design, specifically focusing on what makes a game \"fun\"."
                    },
                    {
                        "title": "Motion Secrets with Emanuel Colombo",
                        "url": "https://motiondesign.school/courses/motion-secrets-with-emanuele-colombo/",
                        "displayUrl": "motiondesign.school/courses/motion-secrets-with-emanuele-colombo/",
                        "subtext": "A course that reshaped how I see motion design. It grounded me in the fundamentals and gave me a clear perspective on how to approach motion as a craft."
                    }
                ]
            }
        },
        "window-music": {
            "title": "Music Player",
            "width": 340,
            "height": 420,
            "top": "25%",
            "left": "40%",
            "theme": "window-theme-green",
            "maximizable": false,
            "showInTaskbar": false,
            "content": {
                "type": "template",
                "payload": "music-player-template"
            },
            "behaviorOnClose": "minimize",
            "notificationId": "music-notification-icon"
        },
        "window-docs": {
            "title": "my_documents",
            "width": 1050,
            "height": 700,
            "top": "16%",
            "left": "34%",
            "theme": "",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "photos-2-v99r3",
                        "name": "photos",
                        "displayName": "photos [2]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-photos-2"
                        }
                    },
                    {
                        "id": "recognitions-3-tovjk",
                        "name": "recognitions",
                        "displayName": "recognitions [3]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-recognitions-3"
                        }
                    },
                    {
                        "id": "my-resumehtml-6vqe7",
                        "name": "my resume",
                        "iconType": "workfile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openWindow",
                            "payload": "window-url-my-resumehtml"
                        }
                    }
                ]
            }
        },
        "window-after-effects": {
            "title": "After Effects",
            "maximizable": false,
            "width": 800,
            "height": 600,
            "top": "15%",
            "left": "25%",
            "content": {
                "type": "template",
                "payload": "checkerboard-template"
            }
        },
        "window-ae-crash": {
            "title": "After Effects",
            "maximizable": false,
            "width": 680,
            "height": 500,
            "top": "35%",
            "left": "30%",
            "theme": "window-theme-blue",
            "iconSVG": "<img src=\"icons/ae.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "content": {
                "type": "template",
                "payload": "modal-template-ae"
            }
        },
        "window-affinity": {
            "title": "Affinity Designer",
            "maximizable": false,
            "width": 680,
            "height": 500,
            "top": "18%",
            "left": "28%",
            "theme": "window-theme-blue",
            "iconSVG": "<img src=\"icons/affinity.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "content": {
                "type": "template",
                "payload": "modal-template-affinity"
            }
        },
        "window-plasticity": {
            "title": "Plasticity",
            "maximizable": false,
            "width": 680,
            "height": 500,
            "top": "21%",
            "left": "31%",
            "theme": "window-theme-blue",
            "iconSVG": "<img src=\"icons/plasticity.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "content": {
                "type": "template",
                "payload": "modal-template-plasticity"
            }
        },
        "window-blender": {
            "title": "Blender",
            "maximizable": false,
            "width": 680,
            "height": 500,
            "top": "24%",
            "left": "34%",
            "theme": "window-theme-blue",
            "iconSVG": "<img src=\"icons/blender.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "content": {
                "type": "template",
                "payload": "modal-template-blender"
            }
        },
        "window-cavalry": {
            "title": "Cavalry",
            "maximizable": false,
            "width": 680,
            "height": 610,
            "top": "27%",
            "left": "37%",
            "theme": "window-theme-blue",
            "iconSVG": "<img src=\"icons/cavalry.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "content": {
                "type": "template",
                "payload": "modal-template-cavalry"
            }
        },
        "window-showcase": {
            "title": "figma",
            "width": 1550,
            "height": 980,
            "top": "5%",
            "left": "5%",
            "theme": "window-theme-dark",
            "maximizable": true,
            "startMaximized": true,
            "content": {
                "type": "showcase",
                "payload": [
                    {
                        "imageUrl": "icons/plugins/figma_recall.png",
                        "title": "Figma Recall",
                        "description": "A version-history plugin for figma frames. Built to version every iteration of Zapp Account designs, to keep track of all alternative directions. Such a life saver during reviews.",
                        "comment": "I saved more than 40 itearations for zapp acocunt home page design exploration with this.",
                        "buttonText": "View in Figma",
                        "buttonUrl": "https://www.figma.com/community/plugin/1514923762926821959"
                    },
                    {
                        "imageUrl": "icons/plugins/fair_color.png",
                        "title": "Fair Colors",
                        "description": "Built to bypass the rigidity of Figma’s native color styles during my Zapp account explorations. By creating an independent layer to map semantic names (like nudge color) to hex codes, I could instantly pivot the entire design's color language without the tedious hassle of unlinking and reattaching native variables.",
                        "comment": "It helped me handoff colors to dev super easily as well. It exported a simple list of colors I used in deisgns with the names I used for them.",
                        "buttonText": "View in Figma",
                        "buttonUrl": "https://www.figma.com/community/plugin/1516478579293499130"
                    },
                    {
                        "imageUrl": "icons/plugins/motion_card.png",
                        "title": "Motion Card",
                        "description": "This was like a floating repository of all the easing and duration tokens we finalized to streamline our motion deisgn language. I gave this a card like form-factor.",
                        "comment": "Printed physical motion cards and shared with the team as well. Mostly for getting everyone used to understanding how to read easing curves",
                        "buttonText": "About Motion Cards",
                        "internalPath": "my_computer/work/projects/motion guidelines"
                    }
                ],
                "videoRow": {
                    "label": "Figma Recall Promo Video",
                    "name": "Figma Recall Promo",
                    "path": "file_sys/my_computer/side%20projects%20%5B2%5D/scripts%20and%20plugins%20%5B2%5D/figma%20recall%20-%20figma%20%5B2%5D/figma%20recall%20promo%20%5B1%5D.mp4",
                    "comment": "Made a quick promo to show Figma Recall in action.",
                    "buttonText": "Watch video"
                }
            }
        },
        "window-image-viewer": {
            "title": "Image Viewer",
            "width": 640,
            "height": 480,
            "top": "20%",
            "left": "25%",
            "maximizable": true,
            "showInTaskbar": true,
            "content": {
                "type": "image",
                "payload": ""
            }
        },
        "window-video-player": {
            "title": "VLC Media Player",
            "width": 800,
            "height": 550,
            "top": "15%",
            "left": "20%",
            "maximizable": true,
            "showInTaskbar": true,
            "theme": "window-theme-gray",
            "iconType": "videoFile",
            "iconSVG": "<img src=\"icons/video.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "content": {
                "type": "video",
                "payload": ""
            }
        },
        "window-notepad": {
            "title": "Notepad",
            "width": 1050,
            "height": 900,
            "top": "8%",
            "left": "25%",
            "maximizable": true,
            "showInTaskbar": true,
            "iconType": "notepad",
            "iconSVG": "<img src=\"icons/notepad.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "content": {
                "type": "notepad",
                "payloadUrl": "file_sys/about-me.txt"
            }
        },
        "window-text-viewer": {
            "title": "Text Viewer",
            "width": 1050,
            "height": 900,
            "top": "8%",
            "left": "25%",
            "maximizable": true,
            "showInTaskbar": true,
            "iconType": "notepad",
            "iconSVG": "<img src=\"icons/notepad.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "content": {
                "type": "notepad",
                "payload": ""
            }
        },
        "window-paint": {
            "title": "Paint",
            "width": 1262,
            "height": 955,
            "top": "10%",
            "left": "15%",
            "maximizable": true,
            "showInTaskbar": true,
            "iconType": "paint",
            "iconSVG": "<img src=\"icons/paint/paint.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "content": {
                "type": "paint",
                "payload": ""
            }
        },
        "window-messenger": {
            "title": "Messenger",
            "width": 1080,
            "height": 860,
            "top": "10%",
            "left": "15%",
            "theme": "",
            "iconSVG": "<img src='icons/messenger.png' style='width: 100%; height: 100%; object-fit: contain;'>",
            "behaviorOnClose": "minimize",
            "notificationId": "messenger-notification-icon",
            "content": {
                "type": "messenger",
                "contacts": [
                    {
                        "id": "me",
                        "name": "Me (Sharvesh)",
                        "avatar": "😎",
                        "isMe": true,
                        "designation": "Designer",
                        "linkedin": "https://www.linkedin.com/in/s-sharvesh/",
                        "messages": [
                            {
                                "from": "them",
                                "text": "Hey there! I'm Sharvesh — a designer passionate about crafting beautiful, functional experiences. Welcome to my portfolio!"
                            }
                        ]
                    },
                    {
                        "id": "manager",
                        "name": "Sivadharana",
                        "avatar": "openAssets/contacts/anoop.jpg",
                        "designation": "Design Manager",
                        "linkedin": "https://linkedin.com/in/",
                        "messages": [
                            {
                                "from": "me",
                                "text": "Hey Anoop, hope you're doing well! Could you share a quick blurb about my trajectory at projects that I can feature as a manager testimonial in my portfolio?"
                            },
                            {
                                "from": "them",
                                "text": "Hey Sharvesh, absolutely - here you go 👇 (and hi to whoever's snooping around the portfolio 👀)"
                            },
                            {
                                "from": "them",
                                "text": "I had the absolute pleasure of managing Sharvesh directly for over four years at projects. He initially joined the team as a Motion Designer and immediately set a high bar, successfully executing end-to-end motion design requirements for major initiatives, including PayZapp and several other high-impact projects."
                            },
                            {
                                "from": "them",
                                "text": "What truly sets Sharvesh apart is his drive to grow and expand his impact. While excelling in motion, he proactively stepped up to become a UX Design Generalist, taking on full ownership of end-to-end module experiences. His craft is exceptional - highly creative, deeply polished, and always user-centric."
                            },
                            {
                                "from": "them",
                                "text": "Sharvesh is a rare hybrid of a creative visionary and a technical problem-solver. He would be a massive asset to any design team, and I highly recommend him."
                            },
                            {
                                "from": "me",
                                "text": "Thanks! This one's taking the top spot. ❤️"
                            }
                        ]
                    },
                    {
                        "id": "bestfriend",
                        "name": "Shalini",
                        "avatar": "openAssets/contacts/vibhore.jpg",
                        "designation": "The Wingman",
                        "linkedin": "https://www.linkedin.com/in/vibhoresinghal/",
                        "messages": [
                            {
                                "from": "them",
                                "text": "Hey ssup!"
                            },
                            {
                                "from": "me",
                                "text": "Yo how's it going?"
                            },
                            {
                                "from": "them",
                                "text": "Man, I really miss working with you. 🥲"
                            },
                            {
                                "from": "them",
                                "text": "I've been thinking about the PayZapp days a lot lately, and honestly, those were some of the most fun projects I've worked on. From building the visual language from the ground up to geeking out over motion, micro-interactions, gamification, and all the tiny details. We were always cooking up something fun."
                            },
                            {
                                "from": "them",
                                "text": "What I miss the most is how easy it was to bounce ideas off each other. We'd start with one thought, go down a dozen rabbit holes, and somehow end up with something way better than what we had in mind. It never really felt like work."
                            },
                            {
                                "from": "them",
                                "text": "Feels like it's been forever."
                            },
                            {
                                "from": "me",
                                "text": "damnn! you getting me emotional over here man 🥹. good times."
                            }
                        ]
                    },
                    {
                        "id": "teammate",
                        "name": "Shreevaradhann",
                        "avatar": "openAssets/contacts/aditya.jpg",
                        "designation": "Designer",
                        "linkedin": "https://www.linkedin.com/in/adityasad/",
                        "portfolio": "https://adityaaa.com",
                        "messages": [
                            {
                                "from": "me",
                                "text": "hey adi! I need some good words from you about how good of a team lead i am 💁‍♂️✨"
                            },
                            {
                                "from": "me",
                                "text": "for my portfolio"
                            },
                            {
                                "from": "them",
                                "text": "I see, but you gotta share how good of a designer i am too 😝"
                            },
                            {
                                "from": "them",
                                "text": "haha! jokes aside"
                            },
                            {
                                "from": "them",
                                "text": "Working with you has honestly been so easy and fun. Thank you for all the learnings!"
                            },
                            {
                                "from": "them",
                                "text": "You’re the kind of lead who cuts right through the noise to make the complex look simple. Clean, sharp, thoughtful, always nailing the details, with clever problem solving you made collaboration effortless."
                            },
                            {
                                "from": "me",
                                "text": "This is chatgpt right?"
                            },
                            {
                                "from": "them",
                                "text": "but every word is true!"
                            },
                            {
                                "from": "me",
                                "text": "haha! okay. thanks bro. 🙏"
                            }
                        ]
                    },
                    {
                        "id": "pm",
                        "name": "Sakthivel",
                        "avatar": "openAssets/contacts/manoj.jpg",
                        "designation": "Lead Product Manager",
                        "linkedin": "https://www.linkedin.com/in/manojkumarraju/",
                        "messages": [
                            {
                                "from": "me",
                                "text": "Hi Manoj!\nThis chat is live on my portfolio."
                            },
                            {
                                "from": "me",
                                "text": "We worked together on Zapp account, would you like to share your work experience with me as a Lead Product Manager on that project?"
                            },
                            {
                                "from": "them",
                                "text": "Hello Sharvesh! Definitely"
                            },
                            {
                                "from": "them",
                                "text": "I had the opportunity to work with Sharvesh for two years across multiple assignments, including prepaid wallet/card user experience (aka Zapp Account), recharge and bill payment flows, and several other product journeys."
                            },
                            {
                                "from": "them",
                                "text": "Sharvesh brings a very strong user-first approach to design. In the prepaid wallet experience, he contributed meaningfully to features such as spend management, budgeting, and transaction categorisation. His ideas were always creative, practical, and grounded in how users would actually interact with the product."
                            },
                            {
                                "from": "them",
                                "text": "One of the things I appreciated most while working with him was that his designs often felt right in the first version itself. This came from the effort he put in before presenting a solution. He would do his own user study, think deeply about the problem, and still remain open to changing his approach if user insights suggested a better direction."
                            },
                            {
                                "from": "them",
                                "text": "I also enjoyed the many brainstorming discussions we had on how best to communicate ideas to users, whether through icons, colours, placement, animations, or interactions. Sharvesh has a strong understanding of information architecture and brings clear, experience-backed opinions on what works best for users."
                            },
                            {
                                "from": "them",
                                "text": "Beyond his core work, I have also seen him explore AI-led hobby projects to solve his own day-to-day work problems, which reflects his curiosity and willingness to learn continuously."
                            },
                            {
                                "from": "them",
                                "text": "Sharvesh is creative, dependable, thoughtful, and highly user-focused. I wish him all the very best for all his future assignments and opportunities."
                            },
                            {
                                "from": "me",
                                "text": "thank you for the kind words Manoj! It has been a pleasure working with you."
                            }
                        ]
                    }
                ]
            }
        },
        "window-fun-3-posters-2": {
            "title": "my_computer\\fun\\posters",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "ae-86-1png-cqoyt",
                        "name": "AE 86.png",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/fun [3]/posters [2]/AE 86 [1].png",
                            "title": "AE 86 [1].png"
                        }
                    },
                    {
                        "id": "bmw-m3-2png-0ete2",
                        "name": "BMW M3.png",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/fun [3]/posters [2]/BMW M3 [2].png",
                            "title": "BMW M3 [2].png"
                        }
                    },
                    {
                        "id": "mclaren-f1-3png-hu6l3",
                        "name": "McLaren F1.png",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/fun [3]/posters [2]/McLaren F1 [3].png",
                            "title": "McLaren F1 [3].png"
                        }
                    },
                    {
                        "id": "porsche-911-4png-yx07l",
                        "name": "Porsche 911.png",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/fun [3]/posters [2]/Porsche 911 [4].png",
                            "title": "Porsche 911 [4].png"
                        }
                    },
                    {
                        "id": "f-14-5png-k8u6q",
                        "name": "F 14.png",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/fun [3]/posters [2]/F 14 [5].png",
                            "title": "F 14 [5].png"
                        }
                    },
                    {
                        "id": "about-these6txt-93cu0",
                        "name": "about these.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/fun [3]/posters [2]/about these[6].txt",
                            "title": "about these[6].txt"
                        }
                    }
                ]
            }
        },
        "window-fun-3": {
            "title": "my_computer\\fun",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "posters-2-pjr0d",
                        "name": "posters",
                        "displayName": "posters [2]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-fun-3-posters-2"
                        }
                    }
                ]
            }
        },
        "window-side-projects-2-lottiemon-statemachines-1": {
            "title": "my_computer\\side projects\\lottiemon - statemachines",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "lottiemon-statemachine-1txt-f0jmk",
                        "name": "lottiemon - statemachine.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/side projects [2]/lottiemon - statemachines [1]/lottiemon - statemachine [1].txt",
                            "title": "lottiemon - statemachine [1].txt"
                        }
                    },
                    {
                        "id": "lottiemon-statemachine-live-2txt-gpg8n",
                        "name": "lottiemon statemachine live",
                        "iconType": "urlShortcut",
                        "description": "Opens https://www.lottiemon.xyz",
                        "iconSVG": "",
                        "badge": "urlRedirect",
                        "action": {
                            "type": "openUrl",
                            "payload": "https://www.lottiemon.xyz",
                            "title": "lottiemon statemachine live [2]"
                        }
                    }
                ]
            }
        },
        "window-side-projects-2-scripts-and-plugins-2-fair-colors-figma-3": {
            "title": "my_computer\\side projects\\scripts and plugins\\fair colors - figma",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "fair-colors-3txt-fqxa1",
                        "name": "fair colors",
                        "iconType": "urlShortcut",
                        "description": "Opens https://www.figma.com/community/plugin/1516478579293499130/fair-colors",
                        "iconSVG": "",
                        "badge": "urlRedirect",
                        "action": {
                            "type": "openUrl",
                            "payload": "https://www.figma.com/community/plugin/1516478579293499130/fair-colors",
                            "title": "fair colors [3]"
                        }
                    },
                    {
                        "id": "fair-colors-in-actionpng-9ax49",
                        "name": "fair colors in action.png",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/side projects [2]/scripts and plugins [2]/fair colors - figma [3]/fair colors in action.png",
                            "title": "fair colors in action.png"
                        }
                    }
                ]
            }
        },
        "window-side-projects-2-scripts-and-plugins-2-fair-type-figma-4": {
            "title": "my_computer\\side projects\\scripts and plugins\\fair type - figma",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "about-fair-type-1txt-a1anr",
                        "name": "about fair type.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/side projects [2]/scripts and plugins [2]/fair type - figma [4]/about fair type [1].txt",
                            "title": "about fair type [1].txt"
                        }
                    },
                    {
                        "id": "fair-type-in-actionpng-wfkh7",
                        "name": "fair type in action.png",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/side projects [2]/scripts and plugins [2]/fair type - figma [4]/fair type in action.png",
                            "title": "fair type in action.png"
                        }
                    }
                ]
            }
        },
        "window-side-projects-2-scripts-and-plugins-2-figma-recall-figma-2": {
            "title": "my_computer\\side projects\\scripts and plugins\\figma recall - figma",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "figma-recall-promo-1mp4-up3q5",
                        "name": "figma recall promo.mp4",
                        "iconType": "videoFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openVideo",
                            "payload": "file_sys/my_computer/side projects [2]/scripts and plugins [2]/figma recall - figma [2]/figma recall promo [1].mp4",
                            "title": "figma recall promo [1].mp4"
                        }
                    },
                    {
                        "id": "about-figma-recall-2txt-zwsbu",
                        "name": "about figma recall",
                        "iconType": "urlShortcut",
                        "description": "Opens https://www.figma.com/community/plugin/1514923762926821959/figma-recall",
                        "iconSVG": "",
                        "badge": "urlRedirect",
                        "action": {
                            "type": "openUrl",
                            "payload": "https://www.figma.com/community/plugin/1514923762926821959/figma-recall",
                            "title": "about figma recall [2]"
                        }
                    }
                ]
            }
        },
        "window-side-projects-2-scripts-and-plugins-2-motion-ease-cavalry-1": {
            "title": "my_computer\\side projects\\scripts and plugins\\motion ease - cavalry",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "about-motion-easetxt-cffu9",
                        "name": "about Motion Ease.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/side projects [2]/scripts and plugins [2]/motion ease - cavalry [1]/about Motion Ease.txt",
                            "title": "about Motion Ease.txt"
                        }
                    },
                    {
                        "id": "motion-ease-in-actionpng-wsksw",
                        "name": "motion ease in action.png",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/side projects [2]/scripts and plugins [2]/motion ease - cavalry [1]/motion ease in action.png",
                            "title": "motion ease in action.png"
                        }
                    }
                ]
            }
        },
        "window-side-projects-2-scripts-and-plugins-2": {
            "title": "my_computer\\side projects\\scripts and plugins",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "motion-ease-cavalry-1-ni3k9",
                        "name": "motion ease - cavalry",
                        "displayName": "motion ease - cavalry [1]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-side-projects-2-scripts-and-plugins-2-motion-ease-cavalry-1"
                        }
                    },
                    {
                        "id": "figma-recall-figma-2-vh9j0",
                        "name": "figma recall - figma",
                        "displayName": "figma recall - figma [2]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-side-projects-2-scripts-and-plugins-2-figma-recall-figma-2"
                        }
                    },
                    {
                        "id": "fair-colors-figma-3-xiv11",
                        "name": "fair colors - figma",
                        "displayName": "fair colors - figma [3]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-side-projects-2-scripts-and-plugins-2-fair-colors-figma-3"
                        }
                    },
                    {
                        "id": "fair-type-figma-4-dwx4o",
                        "name": "fair type - figma",
                        "displayName": "fair type - figma [4]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-side-projects-2-scripts-and-plugins-2-fair-type-figma-4"
                        }
                    },
                    {
                        "id": "thoughts-about-pluginstxt-pozhh",
                        "name": "thoughts about plugins.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/side projects [2]/scripts and plugins [2]/thoughts about plugins.txt",
                            "title": "thoughts about plugins.txt"
                        }
                    }
                ]
            }
        },
        "window-posters": {
            "title": "my_computer\\posters",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "poster-file-0",
                        "name": "1776694691364.jpeg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/1776694691364.jpeg",
                            "title": "1776694691364.jpeg"
                        }
                    },
                    {
                        "id": "poster-file-1",
                        "name": "1777365530463.jpeg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/1777365530463.jpeg",
                            "title": "1777365530463.jpeg"
                        }
                    },
                    {
                        "id": "poster-file-2",
                        "name": "1777365693095.jpeg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/1777365693095.jpeg",
                            "title": "1777365693095.jpeg"
                        }
                    },
                    {
                        "id": "poster-file-3",
                        "name": "1777647933089.jpeg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/1777647933089.jpeg",
                            "title": "1777647933089.jpeg"
                        }
                    },
                    {
                        "id": "poster-file-4",
                        "name": "1777648098490.jpeg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/1777648098490.jpeg",
                            "title": "1777648098490.jpeg"
                        }
                    },
                    {
                        "id": "poster-file-5",
                        "name": "1777648947620.jpeg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/1777648947620.jpeg",
                            "title": "1777648947620.jpeg"
                        }
                    },
                    {
                        "id": "poster-file-6",
                        "name": "1777649027988.jpeg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/1777649027988.jpeg",
                            "title": "1777649027988.jpeg"
                        }
                    },
                    {
                        "id": "poster-file-7",
                        "name": "1778078742574.jpeg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/1778078742574.jpeg",
                            "title": "1778078742574.jpeg"
                        }
                    },
                    {
                        "id": "poster-file-8",
                        "name": "1778078829282.jpeg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/1778078829282.jpeg",
                            "title": "1778078829282.jpeg"
                        }
                    },
                    {
                        "id": "poster-file-9",
                        "name": "1778078905477.jpeg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/1778078905477.jpeg",
                            "title": "1778078905477.jpeg"
                        }
                    },
                    {
                        "id": "poster-file-10",
                        "name": "Black White Bold Minimalist Music World Tour Poster.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/posters/Black White Bold Minimalist Music World Tour Poster.jpg",
                            "title": "Black White Bold Minimalist Music World Tour Poster.jpg"
                        }
                    }
                ]
            }
        },
        "window-work-1-c1-projects-2021-2026-1-ipl-themification-3": {
            "title": "my_computer\\work\\[c1] projects [2023-2024]\\IPL Themification",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "tldr-1txt-q5fzr",
                        "name": "TL;DR.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/work [1]/[c1] projects [2023-2024] [1]/IPL Themification [3]/TL;DR [1].txt",
                            "title": "TL;DR [1].txt"
                        }
                    },
                    {
                        "id": "case-study-2html-2mynj",
                        "name": "case study",
                        "iconType": "workfile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openLayoutUrl",
                            "payload": "https://sharvesh.github.io/caseStudies/IPL%20Themification/ipl-themification-case-study.html",
                            "title": "case study [2]"
                        }
                    }
                ]
            }
        },
        "window-work-1-c1-projects-2021-2026-1-lottiemon-2-from-the-session": {
            "title": "my_computer\\work\\[c1] projects [2023-2024]\\lottiemon\\from the session",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "lottie-state-machinesjpg-utto1",
                        "name": "lottie state machines.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/work [1]/[c1] projects [2023-2024] [1]/lottiemon [2]/from the session/lottie state machines.jpg",
                            "title": "lottie state machines.jpg"
                        }
                    },
                    {
                        "id": "motion-cardsjpg-pomiq",
                        "name": "motion cards.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/work [1]/[c1] projects [2023-2024] [1]/lottiemon [2]/from the session/motion cards.jpg",
                            "title": "motion cards.jpg"
                        }
                    },
                    {
                        "id": "statemachines-on-lottiemonmp4-1e8gb",
                        "name": "statemachines on lottiemon.mp4",
                        "iconType": "videoFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openVideo",
                            "payload": "file_sys/my_computer/work [1]/[c1] projects [2023-2024] [1]/lottiemon [2]/from the session/statemachines on lottiemon.mp4",
                            "title": "statemachines on lottiemon.mp4"
                        }
                    }
                ]
            }
        },
        "window-work-1-c1-projects-2021-2026-1-lottiemon-2": {
            "title": "my_computer\\work\\[c1] projects [2023-2024]\\lottiemon",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "full-article1html-g3sr2",
                        "name": "full article",
                        "iconType": "workfile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openLayoutUrl",
                            "payload": "https://sharvesh.github.io/caseStudies/Lottiemon/lottiemon-case-study.html",
                            "title": "full article[1]"
                        }
                    },
                    {
                        "id": "what-is-lottiemon2txt-govdn",
                        "name": "what is lottiemon.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/work [1]/[c1] projects [2023-2024] [1]/lottiemon [2]/what is lottiemon[2].txt",
                            "title": "what is lottiemon[2].txt"
                        }
                    },
                    {
                        "id": "lottiemon-live3txt-rwtdp",
                        "name": "lottiemon live",
                        "iconType": "urlShortcut",
                        "description": "Opens https://www.lottiemon.com",
                        "iconSVG": "",
                        "badge": "urlRedirect",
                        "action": {
                            "type": "openUrl",
                            "payload": "https://www.lottiemon.com",
                            "title": "lottiemon live[3]"
                        }
                    },
                    {
                        "id": "from-the-session-karkq",
                        "name": "from the session",
                        "displayName": "from the session",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-1-c1-projects-2021-2026-1-lottiemon-2-from-the-session"
                        }
                    }
                ]
            }
        },
        "window-work-1-c1-projects-2021-2026-1-motion-guidelines-4-from-the-workshop-4": {
            "title": "my_computer\\work\\[c1] projects [2023-2024]\\motion guidelines\\from the workshop",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "motion-cardsjpg-ftdqx",
                        "name": "motion cards.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_computer/work [1]/[c1] projects [2023-2024] [1]/motion guidelines [4]/from the workshop [4]/motion cards.jpg",
                            "title": "motion cards.jpg"
                        }
                    },
                    {
                        "id": "workshopmp4-83flh",
                        "name": "workshop.mp4",
                        "iconType": "videoFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openVideo",
                            "payload": "file_sys/my_computer/work [1]/[c1] projects [2023-2024] [1]/motion guidelines [4]/from the workshop [4]/workshop.mp4",
                            "title": "workshop.mp4"
                        }
                    }
                ]
            }
        },
        "window-work-1-c1-projects-2021-2026-1-motion-guidelines-4": {
            "title": "my_computer\\work\\[c1] projects [2023-2024]\\motion guidelines",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "tldr-1-txt-rt45v",
                        "name": "TL;DR .txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/work [1]/[c1] projects [2023-2024] [1]/motion guidelines [4]/TL;DR [1] .txt",
                            "title": "TL;DR [1] .txt"
                        }
                    },
                    {
                        "id": "motion-cards-2fig-1o6s2",
                        "name": "motion cards.fig",
                        "iconType": "figma",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F24E1E\" d=\"M7.5,16.5A1.5,1.5 0 0,1 6,15V12A1.5,1.5 0 0,1 7.5,10.5H9V12H7.5V15H9V16.5H7.5M12,15A1.5,1.5 0 0,1 10.5,13.5V12A1.5,1.5 0 0,1 12,10.5A1.5,1.5 0 0,1 13.5,12V13.5A1.5,1.5 0 0,1 12,15M12,9A1.5,1.5 0 0,1 10.5,7.5A1.5,1.5 0 0,1 12,6A1.5,1.5 0 0,1 13.5,7.5A1.5,1.5 0 0,1 12,9M16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5H18V12H16.5V13.5M16.5,9A1.5,1.5 0 0,1 15,7.5V6H16.5A1.5,1.5 0 0,1 18,7.5V9H16.5Z\" /></svg>",
                        "action": {
                            "type": "openFig",
                            "payload": "file_sys/my_computer/work [1]/[c1] projects [2023-2024] [1]/motion guidelines [4]/motion cards [2].fig",
                            "title": "motion cards [2].fig",
                            "figContent": "[fig]\ntitle=Motion Design Guidelines\nfile=Guidelines\ncomment=Sharvesh,These motion design guidelines shaped our micro-interaction language across Zapp account.\ncomment=Sharvesh,These were printed as physical cards and handed out to every team member for quick reference.\nbtn=Workshop Presentation|View Presentation|https://www.figma.com/proto/cNF74SIEIvS34GQFyAeaHz/Motion-Design-Guidelines?page-id=127%3A2416&node-id=205-3202&viewport=1805%2C117%2C0.3&t=hxraIxBeTLQqtoMI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=205%3A3202&show-proto-sidebar=0\n",
                            "figImages": [
                                {
                                    "name": "card front",
                                    "path": "file_sys/my_computer/work%20%5B1%5D/%5Bc1%5D%20projects%20%5B2021-2026%5D%20%5B1%5D/motion%20guidelines%20%5B4%5D/%5BH%5D%20images/%5B1%5D%20card%20front%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 1,
                                    "row": 2
                                },
                                {
                                    "name": "Workshop Presentation",
                                    "path": "file_sys/my_computer/work%20%5B1%5D/%5Bc1%5D%20projects%20%5B2021-2026%5D%20%5B1%5D/motion%20guidelines%20%5B4%5D/%5BH%5D%20images/%5B1%5D%20Workshop%20Presentation%20%5B1%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 1,
                                    "row": 1,
                                    "link": "https://www.figma.com/proto/cNF74SIEIvS34GQFyAeaHz/Motion-Design-Guidelines?page-id=127%3A2416&node-id=205-3202&viewport=1805%2C117%2C0.3&t=hxraIxBeTLQqtoMI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=205%3A3202&show-proto-sidebar=0",
                                    "buttonText": "View Presentation"
                                },
                                {
                                    "name": "Button Tap",
                                    "path": "file_sys/my_computer/work%20%5B1%5D/%5Bc1%5D%20projects%20%5B2021-2026%5D%20%5B1%5D/motion%20guidelines%20%5B4%5D/%5BH%5D%20images/%5B2%5D%20Button%20Tap%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 2,
                                    "row": 2
                                },
                                {
                                    "name": "Bottom Sheet",
                                    "path": "file_sys/my_computer/work%20%5B1%5D/%5Bc1%5D%20projects%20%5B2021-2026%5D%20%5B1%5D/motion%20guidelines%20%5B4%5D/%5BH%5D%20images/%5B3%5D%20Bottom%20Sheet%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 3,
                                    "row": 2
                                },
                                {
                                    "name": "toast",
                                    "path": "file_sys/my_computer/work%20%5B1%5D/%5Bc1%5D%20projects%20%5B2021-2026%5D%20%5B1%5D/motion%20guidelines%20%5B4%5D/%5BH%5D%20images/%5B4%5D%20toast%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 4,
                                    "row": 2
                                },
                                {
                                    "name": "Page Transition",
                                    "path": "file_sys/my_computer/work%20%5B1%5D/%5Bc1%5D%20projects%20%5B2021-2026%5D%20%5B1%5D/motion%20guidelines%20%5B4%5D/%5BH%5D%20images/%5B5%5D%20Page%20Transition%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 5,
                                    "row": 2
                                },
                                {
                                    "name": "Pop-Up",
                                    "path": "file_sys/my_computer/work%20%5B1%5D/%5Bc1%5D%20projects%20%5B2021-2026%5D%20%5B1%5D/motion%20guidelines%20%5B4%5D/%5BH%5D%20images/%5B6%5D%20Pop-Up%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 6,
                                    "row": 2
                                },
                                {
                                    "name": "Pop-Up (Elastic)",
                                    "path": "file_sys/my_computer/work%20%5B1%5D/%5Bc1%5D%20projects%20%5B2021-2026%5D%20%5B1%5D/motion%20guidelines%20%5B4%5D/%5BH%5D%20images/%5B7%5D%20Pop-Up%20(Elastic)%20%5B2%5D.png",
                                    "ext": ".png",
                                    "sortOrder": 7,
                                    "row": 2
                                }
                            ],
                            "figRowLabels": {
                                "1": "The Workshop Presentation for Motion Design Guidelines",
                                "2": "Motion Card Designs for Print"
                            },
                            "figRowSpacing": {}
                        }
                    },
                    {
                        "id": "motion-across-payzapp3html-dg7te",
                        "name": "motion across payzapp",
                        "iconType": "workfile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openLayoutUrl",
                            "payload": "https://sharvesh.github.io/caseStudies/PayZappAnimations/",
                            "title": "motion across payzapp[3]"
                        }
                    },
                    {
                        "id": "from-the-workshop-4-6firg",
                        "name": "from the workshop",
                        "displayName": "from the workshop [4]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-1-c1-projects-2021-2026-1-motion-guidelines-4-from-the-workshop-4"
                        }
                    }
                ]
            }
        },
        "window-work-1-c1-projects-2021-2026-1-zapp-account-1": {
            "title": "my_computer\\work\\[c1] projects [2023-2024]\\zapp account",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "tldr-1txt-4jr3n",
                        "name": "TL;DR.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/work [1]/[c1] projects [2023-2024] [1]/zapp account [1]/TL;DR  [1].txt",
                            "title": "TL;DR  [1].txt"
                        }
                    },
                    {
                        "id": "case-study-2html-07gex",
                        "name": "case study",
                        "iconType": "workfile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openLayoutUrl",
                            "payload": "https://sharvesh.github.io/caseStudies/Zapp%20Account/zapp-account-a4-case-study.html",
                            "title": "case study [2]"
                        }
                    }
                ]
            }
        },
        "window-work-1-c1-projects-2021-2026-1": {
            "title": "my_computer\\work\\[c1] projects [2023-2024]",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "zapp-account-1-tpsdd",
                        "name": "zapp account",
                        "displayName": "zapp account [1]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-1-c1-projects-2021-2026-1-zapp-account-1"
                        }
                    },
                    {
                        "id": "lottiemon-2-km4r1",
                        "name": "lottiemon",
                        "displayName": "lottiemon [2]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-1-c1-projects-2021-2026-1-lottiemon-2"
                        }
                    },
                    {
                        "id": "ipl-themification-3-pgo16",
                        "name": "IPL Themification",
                        "displayName": "IPL Themification [3]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-1-c1-projects-2021-2026-1-ipl-themification-3"
                        }
                    },
                    {
                        "id": "motion-guidelines-4-e0psb",
                        "name": "motion guidelines",
                        "displayName": "motion guidelines [4]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-1-c1-projects-2021-2026-1-motion-guidelines-4"
                        }
                    }
                ]
            }
        },
        "window-work-1-c2-skills-2019-2021-3": {
            "title": "my_computer\\work\\[c2] skills [2023-Present]",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "full-timetxt-6ruch",
                        "name": "full time",
                        "iconType": "urlShortcut",
                        "description": "Opens https://sharvesh.myportfolio.com",
                        "iconSVG": "",
                        "badge": "urlRedirect",
                        "action": {
                            "type": "openUrl",
                            "payload": "https://sharvesh.myportfolio.com",
                            "title": "full time"
                        }
                    },
                    {
                        "id": "internshiptxt-qhwgw",
                        "name": "internship.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/work [1]/[c2] skills [2023-Present] [3]/internship.txt",
                            "title": "internship.txt"
                        }
                    }
                ]
            }
        },
        "window-work-1-c3-student-2026-now-2-p-work-1": {
            "title": "my_computer\\work\\[c3] student [2023-2027]\\[P] work",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": []
            }
        },
        "window-work-1-c3-student-2026-now-2": {
            "title": "my_computer\\work\\[c3] student [2023-2027]",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "p-work-1-np6ef",
                        "name": "work",
                        "displayName": "work [1]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": "protected",
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-1-c3-student-2026-now-2-p-work-1"
                        }
                    },
                    {
                        "id": "about-my-roletxt-vtvh2",
                        "name": "about my role.txt",
                        "iconType": "notepad",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/work [1]/[c3] student [2023-2027] [2]/about my role.txt",
                            "title": "about my role.txt"
                        }
                    }
                ]
            }
        },
        "window-work-1": {
            "title": "my_computer\\work",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "cervical-cancer-main-folder",
                        "name": "cervical cancer patient app",
                        "displayName": "cervical cancer patient app [3]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-cervical-cancer"
                        }
                    },
                    {
                        "id": "parkinson-folder",
                        "name": "parkinson disease app",
                        "displayName": "parkinson disease app [5]",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-parkinson-app"
                        }
                    },
                    {
                        "id": "plant-care-ai-folder",
                        "name": "plant care ai",
                        "displayName": "plant care ai",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-plant-care"
                        }
                    },
                    {
                        "id": "seizure-folder",
                        "name": "seziure",
                        "displayName": "seziure",
                        "iconType": "folder",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F9E79F\" d=\"M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2h-8l-2-2z\"/></svg>",
                        "badge": null,
                        "shortcutAddress": null,
                        "action": {
                            "type": "openWindow",
                            "payload": "window-work-seizure"
                        }
                    }
                ]
            }
        },
        "window-work-cervical-cancer": {
            "title": "cervical cancer patient app",
            "width": 800,
            "height": 600,
            "top": "15%",
            "left": "25%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "cervical-about-txt",
                        "name": "about-project.txt",
                        "iconType": "notepad",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/work [1]/cervical cancer patient app/about-project.txt",
                            "title": "about-project.txt"
                        }
                    }
                ]
            }
        },
        "window-work-parkinson-app": {
            "title": "parkinson disease app",
            "width": 800,
            "height": 600,
            "top": "15%",
            "left": "25%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "parkinson-about-txt",
                        "name": "about-project.txt",
                        "iconType": "notepad",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/work [1]/parkinson disease app/about-project.txt",
                            "title": "about-project.txt"
                        }
                    }
                ]
            }
        },
        "window-work-plant-care": {
            "title": "plant care ai",
            "width": 800,
            "height": 600,
            "top": "15%",
            "left": "25%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "plant-about-txt",
                        "name": "about-project.txt",
                        "iconType": "notepad",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/work [1]/plant care ai/about-project.txt",
                            "title": "about-project.txt"
                        }
                    }
                ]
            }
        },
        "window-work-seizure": {
            "title": "seziure",
            "width": 800,
            "height": 600,
            "top": "15%",
            "left": "25%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "seizure-about-txt",
                        "name": "about-project.txt",
                        "iconType": "notepad",
                        "action": {
                            "type": "openNotepad",
                            "payload": "file_sys/my_computer/work [1]/seziure/about-project.txt",
                            "title": "about-project.txt"
                        }
                    }
                ]
            }
        },
        "window-url-my-resumehtml": {
            "title": "my resume",
            "width": 1350,
            "height": 1100,
            "top": "16px",
            "left": "11%",
            "content": {
                "type": "iframe",
                "payload": "openAssets/pdfs/Sharvesh_ProductDesigner_Resume.pdf"
            }
        },
        "window-photos-2": {
            "title": "my_computer\\photos",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "meet_1",
                        "name": "meet_1.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_documents/photos [2]/meet_1.jpg",
                            "title": "meet_1.jpg"
                        }
                    },
                    {
                        "id": "meet_3",
                        "name": "meet_3.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_documents/photos [2]/meet_3.jpg",
                            "title": "meet_3.jpg"
                        }
                    },
                    {
                        "id": "starbucks",
                        "name": "starbucks.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_documents/photos [2]/starbucks.jpg",
                            "title": "starbucks.jpg"
                        }
                    },
                    {
                        "id": "street_group",
                        "name": "street_group.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/my_documents/photos [2]/street_group.jpg",
                            "title": "street_group.jpg"
                        }
                    }
                ]
            }
        },
        "window-recognitions-3": {
            "title": "my_computer\\recognitions",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": []
            }
        },
        "window-deleted-photos1": {
            "title": "my_computer\\deleted photos",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "after-2hr-trafficjpg-p2awz",
                        "name": "after 2hr traffic.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/recycle_bin/deleted photos[1]/after 2hr traffic.jpg",
                            "title": "after 2hr traffic.jpg"
                        }
                    },
                    {
                        "id": "aurajpg-npovj",
                        "name": "aura.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/recycle_bin/deleted photos[1]/aura.jpg",
                            "title": "aura.jpg"
                        }
                    },
                    {
                        "id": "chota-donjpg-4siym",
                        "name": "chota don.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/recycle_bin/deleted photos[1]/chota don.jpg",
                            "title": "chota don.jpg"
                        }
                    },
                    {
                        "id": "haloweenjpg-oxptg",
                        "name": "haloween.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/recycle_bin/deleted photos[1]/haloween.jpg",
                            "title": "haloween.jpg"
                        }
                    },
                    {
                        "id": "locked-injpg-t8ec6",
                        "name": "locked in.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/recycle_bin/deleted photos[1]/locked in.jpg",
                            "title": "locked in.jpg"
                        }
                    },
                    {
                        "id": "secret-techniquejpg-brskb",
                        "name": "secret technique.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/recycle_bin/deleted photos[1]/secret technique.jpg",
                            "title": "secret technique.jpg"
                        }
                    },
                    {
                        "id": "shyjpg-m5q9v",
                        "name": "shy.jpg",
                        "iconType": "imageFile",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#B2EBF2\" d=\"M21.4,6.6l-2.8-2.8C18.3,3.5,17.9,3.3,17.5,3.3H6.5C5.7,3.3,5,4,5,4.8v14.4c0,0.8,0.7,1.5,1.5,1.5h11c0.8,0,1.5-0.7,1.5-1.5V7.5C19,7.1,18.8,6.7,18.6,6.4L21.4,6.6z M13,18H7v-2h6V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z\"/></svg>",
                        "action": {
                            "type": "openImage",
                            "payload": "file_sys/recycle_bin/deleted photos[1]/shy.jpg",
                            "title": "shy.jpg"
                        }
                    }
                ]
            }
        },
        "window-scrapped-ideas-2": {
            "title": "my_computer\\scrapped ideas",
            "width": 800,
            "height": 600,
            "top": "10%",
            "left": "20%",
            "content": {
                "type": "storage",
                "payload": [
                    {
                        "id": "interaction-ideas-1fig-ymmcp",
                        "name": "interaction ideas.fig",
                        "iconType": "figma",
                        "description": "",
                        "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#F24E1E\" d=\"M7.5,16.5A1.5,1.5 0 0,1 6,15V12A1.5,1.5 0 0,1 7.5,10.5H9V12H7.5V15H9V16.5H7.5M12,15A1.5,1.5 0 0,1 10.5,13.5V12A1.5,1.5 0 0,1 12,10.5A1.5,1.5 0 0,1 13.5,12V13.5A1.5,1.5 0 0,1 12,15M12,9A1.5,1.5 0 0,1 10.5,7.5A1.5,1.5 0 0,1 12,6A1.5,1.5 0 0,1 13.5,7.5A1.5,1.5 0 0,1 12,9M16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5H18V12H16.5V13.5M16.5,9A1.5,1.5 0 0,1 15,7.5V6H16.5A1.5,1.5 0 0,1 18,7.5V9H16.5Z\" /></svg>",
                        "action": {
                            "type": "openFig",
                            "payload": "file_sys/recycle_bin/scrapped ideas [2]/interaction ideas [1].fig",
                            "title": "interaction ideas [1].fig",
                            "figContent": "[fig]\ntitle=Interaction Ideas\nfile=interaction ideas\nimages=[H] Interactions\ncomment=Sharvesh,A collection of interaction concepts explored during design explorations — motion ideas for key flows that didn't make the final cut.\n",
                            "figImages": [
                                {
                                    "name": "add money Interaction idea",
                                    "path": "file_sys/recycle_bin/scrapped%20ideas%20%5B2%5D/%5BH%5D%20Interactions/%5B1%5D%20add%20money%20Interaction%20idea%20%5B1%5D.mp4",
                                    "ext": ".mp4",
                                    "sortOrder": 1,
                                    "row": 1
                                },
                                {
                                    "name": "Tap and Pay interaction idea",
                                    "path": "file_sys/recycle_bin/scrapped%20ideas%20%5B2%5D/%5BH%5D%20Interactions/%5B2%5D%20Tap%20and%20Pay%20interaction%20idea%20%5B1%5D.mp4",
                                    "ext": ".mp4",
                                    "sortOrder": 2,
                                    "row": 1
                                },
                                {
                                    "name": "cards tab Interaction Ideas",
                                    "path": "file_sys/recycle_bin/scrapped%20ideas%20%5B2%5D/%5BH%5D%20Interactions/%5B3%5D%20cards%20tab%20Interaction%20Ideas%20%5B1%5D.mp4",
                                    "ext": ".mp4",
                                    "sortOrder": 3,
                                    "row": 1
                                },
                                {
                                    "name": "home interaction concept",
                                    "path": "file_sys/recycle_bin/scrapped%20ideas%20%5B2%5D/%5BH%5D%20Interactions/%5B4%5Dhome%20interaction%20concept%20%5B1%5D.mp4",
                                    "ext": ".mp4",
                                    "sortOrder": 4,
                                    "row": 1
                                },
                                {
                                    "name": "cardFreeze Interaction",
                                    "path": "file_sys/recycle_bin/scrapped%20ideas%20%5B2%5D/%5BH%5D%20Interactions/%5B5%5DcardFreeze%20Interaction%20%5B1%5D.gif",
                                    "ext": ".gif",
                                    "sortOrder": 5,
                                    "row": 1
                                }
                            ],
                            "figRowLabels": {
                                "1": "These are few of the many interaction concepts i tried during explorations that didn't make it </3"
                            },
                            "figRowSpacing": {}
                        }
                    },
                    {
                        "id": "bill-settlement-education-concept-2-mp4-j521e",
                        "name": "Bill Settlement - Education Concept .mp4",
                        "iconType": "videoFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openVideo",
                            "payload": "file_sys/recycle_bin/scrapped ideas [2]/Bill Settlement - Education Concept [2] .mp4",
                            "title": "Bill Settlement - Education Concept [2] .mp4"
                        }
                    },
                    {
                        "id": "upi-on-ppi-education-concept-3mp4-2k469",
                        "name": "UPI on PPI - Education Concept.mp4",
                        "iconType": "videoFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openVideo",
                            "payload": "file_sys/recycle_bin/scrapped ideas [2]/UPI on PPI - Education Concept [3].mp4",
                            "title": "UPI on PPI - Education Concept [3].mp4"
                        }
                    },
                    {
                        "id": "cashback-on-payment-4mp4-2j4uq",
                        "name": "Cashback on Payment.mp4",
                        "iconType": "videoFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openVideo",
                            "payload": "file_sys/recycle_bin/scrapped ideas [2]/Cashback on Payment [4].mp4",
                            "title": "Cashback on Payment [4].mp4"
                        }
                    },
                    {
                        "id": "transaction-animation-5mp4-x9jfh",
                        "name": "Transaction Animation.mp4",
                        "iconType": "videoFile",
                        "description": "",
                        "iconSVG": "",
                        "action": {
                            "type": "openVideo",
                            "payload": "file_sys/recycle_bin/scrapped ideas [2]/Transaction Animation [5].mp4",
                            "title": "Transaction Animation [5].mp4"
                        }
                    }
                ]
            }
        }
    },
    "startMenu": [
        {
            "type": "submenu",
            "name": "Programs",
            "iconSVG": "<img src=\"icons/programs.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "items": [
                {
                    "name": "After Effects",
                    "iconSVG": "<img src=\"icons/ae.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
                    "action": {
                        "type": "openWindow",
                        "payload": "window-after-effects"
                    }
                },
                {
                    "name": "Affinity Designer",
                    "iconSVG": "<img src=\"icons/affinity.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
                    "action": {
                        "type": "openWindow",
                        "payload": "window-affinity"
                    }
                },
                {
                    "name": "Plasticity",
                    "iconSVG": "<img src=\"icons/plasticity.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
                    "action": {
                        "type": "openWindow",
                        "payload": "window-plasticity"
                    }
                },
                {
                    "name": "Blender",
                    "iconSVG": "<img src=\"icons/blender.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
                    "action": {
                        "type": "openWindow",
                        "payload": "window-blender"
                    }
                },
                {
                    "name": "Cavalry",
                    "iconSVG": "<img src=\"icons/cavalry.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
                    "action": {
                        "type": "openWindow",
                        "payload": "window-cavalry"
                    }
                }
            ]
        },
        {
            "type": "item",
            "name": "Paint",
            "firstOpenLabel": "Paint",
            "iconSVG": "<img src=\"icons/paint/paint.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "action": {
                "type": "openWindow",
                "payload": "window-paint"
            }
        },
        {
            "type": "item",
            "name": "Notepad",
            "firstOpenLabel": "About me",
            "iconSVG": "<img src=\"icons/notepad.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "action": {
                "type": "openWindow",
                "payload": "window-notepad"
            }
        },
        {
            "type": "item",
            "name": "Music",
            "firstOpenLabel": "My Playlist",
            "iconType": "music",
            "iconInlineStyle": "transform: scale(0.95);",
            "action": {
                "type": "openWindow",
                "payload": "window-music"
            }
        },
        {
            "type": "item",
            "name": "Let's Chat",
            "iconSVG": "<img src=\"icons/messenger.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "action": {
                "type": "openWindow",
                "payload": "window-messenger"
            }
        },
        {
            "type": "separator"
        },
        {
            "type": "item",
            "name": "Shut Down...",
            "iconSVG": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.93.78-3.68 2.06-4.94L5.64 5.64A9 9 0 1 0 21 12c0-2.48-1-4.73-2.67-6.33z\"/></svg>",
            "action": {
                "type": "shutdown"
            }
        }
    ],
    "notifications": [
        {
            "id": "music-notification-icon",
            "persistent": false,
            "iconType": "music",
            "action": {
                "type": "openWindow",
                "payload": "window-music"
            }
        },
        {
            "id": "messenger-notification-icon",
            "persistent": false,
            "iconSVG": "<img src='icons/messenger.png' style='width: 100%; height: 100%; object-fit: contain;'>",
            "action": {
                "type": "openWindow",
                "payload": "window-messenger"
            }
        },
        {
            "id": "internet-notification-icon",
            "persistent": false,
            "iconSVG": "<img src=\"icons/connected.png\" style=\"width: 100%; height: 100%; object-fit: contain;\">",
            "action": {
                "type": "showBalloon",
                "title": "Internet",
                "message": "You are connected",
                "targetIconId": "internet-notification-icon",
                "displayDuration": 5000
            }
        }
    ]
};
