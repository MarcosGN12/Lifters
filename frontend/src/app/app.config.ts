import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  LucideAngularModule,
  File,
  House,
  Menu,
  UserCheck,
  Eye,
  FileIcon,
  Lock,
  User,
  UserLock,
  Dumbbell,
  Bell,
  Plus,
  ListFilter,
  Trash2,
  Pen,
} from 'lucide-angular';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './interceptor/logging-interceptor/logging-interceptor';
import { authInterceptor } from './interceptor/auth-interceptor/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, loggingInterceptor])),
    importProvidersFrom(
      LucideAngularModule.pick({
        File,
        House,
        Menu,
        UserCheck,
        Eye,
        FileIcon,
        Lock,
        User,
        UserLock,
        Dumbbell,
        Bell,
        Plus,
        ListFilter,
        Trash2,
        Pen,
      }),
    ),
  ],
};
