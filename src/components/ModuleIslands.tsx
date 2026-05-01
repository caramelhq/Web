'use client';

import Link from 'next/link';
import Container from './Container';
import {
  IconShieldCheck, IconTicket, IconDoorEnter, IconMusic, IconClipboardList,
  IconGift, IconCoin, IconStar, IconShieldLock, IconUserCheck,
  IconChartPie, IconChartLine, IconCake, IconBell, IconRobot,
  IconFlag, IconCode, IconMoodSmile, IconFilter, IconBulb,
  IconLock, IconCloud, IconLanguage, IconMoodCrazyHappy, IconDeviceGamepad2,
  IconRadio, IconHash,
} from '@tabler/icons-react';

const modules = [
  { name: 'Anti-Spam',         icon: IconShieldCheck    },
  { name: 'Tickets',           icon: IconTicket          },
  { name: 'Bienvenidas',       icon: IconDoorEnter       },
  { name: 'Música',            icon: IconMusic           },
  { name: 'Logs',              icon: IconClipboardList   },
  { name: 'Sorteos',           icon: IconGift            },
  { name: 'Economía',          icon: IconCoin            },
  { name: 'Niveles',           icon: IconStar            },
  { name: 'Anti-Raid',         icon: IconShieldLock      },
  { name: 'Roles Automáticos', icon: IconUserCheck       },
  { name: 'Encuestas',         icon: IconChartPie        },
  { name: 'Estadísticas',      icon: IconChartLine       },
  { name: 'Cumpleaños',        icon: IconCake            },
  { name: 'Recordatorios',     icon: IconBell            },
  { name: 'AutoMod',           icon: IconRobot           },
  { name: 'Reportes',          icon: IconFlag            },
  { name: 'Embeds',            icon: IconCode            },
  { name: 'Reacciones',        icon: IconMoodSmile       },
  { name: 'Filtros',           icon: IconFilter          },
  { name: 'Sugerencias',       icon: IconBulb            },
  { name: 'Confesiones',       icon: IconLock            },
  { name: 'Clima',             icon: IconCloud           },
  { name: 'Traducción',        icon: IconLanguage        },
  { name: 'Memes',             icon: IconMoodCrazyHappy  },
  { name: 'Minijuegos',        icon: IconDeviceGamepad2  },
  { name: 'Radio',             icon: IconRadio           },
  { name: 'Contadores',        icon: IconHash            },
];

export default function ModuleIslands() {
  return (
    <section className="py-16">
      <Container>

        <p
          data-i18n="more.label"
          className="text-center text-sm font-semibold font-body text-muted/60 tracking-wide mb-8 select-none"
        >
          y muchos más...
        </p>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-2 pointer-events-none select-none blur-sm">
            {modules.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group flex items-center gap-2.5 px-4 py-3 rounded-xl border border-border bg-surface transition-colors duration-200 cursor-default select-none"
              >
                <Icon size={20} className="text-muted shrink-0" stroke={1.5} />
                <span className="text-sm font-semibold font-body text-muted truncate">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold font-body tracking-widest uppercase text-muted/70 select-none">
              Próximamente
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border hover:border-brand/40 text-muted hover:text-brand text-sm font-semibold font-body transition-all duration-200 hover:bg-brand/5"
          >
            Ver todos los módulos
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>

      </Container>
    </section>
  );
}
