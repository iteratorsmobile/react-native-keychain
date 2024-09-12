//
//  RNKeychainManager.h
//  RNKeychainManager
//
//  Created by Joel Arvidsson on 2015-05-20.
//  Copyright (c) 2015 Joel Arvidsson. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNKeychainSpec.h"
#endif

@interface RNKeychainManager : NSObject <RCTBridgeModule>
@end

#ifdef RCT_NEW_ARCH_ENABLED
@interface RNKeychainManager () <NativeRNKeychainSpec>
@end
#endif
